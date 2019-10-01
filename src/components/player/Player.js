import React from 'react';

import { ScheduleContainer } from '../../containers/shows/ScheduleContainer';
import { YouTubePlayer } from './YouTubePlayer';
import { TwitchPlayer } from './TwitchPlayer';
import { checkForScheduledShow } from '../../util/DBUtil';
import { fetchPlaylistVideos, fetchVideoDuration } from '../../util/YouTubeUtil';
import { shuffle } from '../../util/DataUtil';
import { VideoHeader } from './VideoHeader';
import Loader from 'react-loader-spinner';

import PlayerConstants from '../../data/PlayerConstants.json';
import YTConstants from '../../data/YTConstants.json';
import { getMaxVideoHeight } from '../../util/AppUtil';

const Twitch = window.Twitch;

/*
    Container that holds the Player page
 */
export class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePlayer: PlayerConstants.TWITCH,
            playing: "",
            videoTitle: "...",
            numberOfListeners: Math.round(Math.random() * 100), // random number for no reason
            twitchPlayer: undefined,
            youTubePlayer: undefined,
            activeProgram: { // this is the active program that is currently playing.
                name: '...',
                programId: -1
            }
        };

        this.bindTwitchPlayer = this.bindTwitchPlayer.bind(this);
        this.bindYouTubePlayer = this.bindYouTubePlayer.bind(this);
        this.showTwitch = this.showTwitch.bind(this);
        this.hideTwitch = this.hideTwitch.bind(this);
        this.startYouTubePlayerRunner = this.startYouTubePlayerRunner.bind(this);
        this.populatePlayer = this.populatePlayer.bind(this);
        this.playScheduledProgramming = this.playScheduledProgramming.bind(this);
        this.handleYouTubeStateChange = this.handleYouTubeStateChange.bind(this);
        this.handleYoutubeError = this.handleYoutubeError.bind(this);
        this.loadPlayer = this.loadPlayer.bind(this);
        this.playVideoAtTime = this.playVideoAtTime.bind(this);
    }

    bindTwitchPlayer(twitchPlayer) {
        // Add twitch event listeners here
        this.setState({ twitchPlayer });

        twitchPlayer.addEventListener(Twitch.Player.PLAYING, this.showTwitch);
        twitchPlayer.addEventListener(Twitch.Player.OFFLINE, this.hideTwitch);
    }

    showTwitch() {
        // Get whatever the volume is right now so we can scale it appropriately
        this.setState({ volume: this.state.youTubePlayer.getVolume() });


        // Fade out the audio
        let fadeOutId = setInterval(function (self) {
            if (self.state.volume > 0) {
                let newVolume = self.state.volume - 5;
                self.state.youTubePlayer.setVolume(newVolume);
                self.setState({ volume: newVolume });
            }
        }, 250, this);

        // After 5 seconds (when the audio is done fading)
        setTimeout(function (self) {
            // Clear the fadeout interval
            clearInterval(fadeOutId);

            self.setState({
                activePlayer: PlayerConstants.TWITCH,
                videoTitle: "Hip Dad Radio LIVE"
            });

            // Pause the youTubePlayer if it's there
            if (self.state.youTubePlayer) {
                self.state.youTubePlayer.pauseVideo();
            }
        }, 5000, this);
    }

    hideTwitch() {
        // Get whatever the volume is right now so that we can scale it appropriately
        this.setState({
            activePlayer: PlayerConstants.YOUTUBE,
            volume: this.state.youTubePlayer ? this.state.youTubePlayer.getVolume() : 100
        });

        // Start playing the video again
        if (this.state.youTubePlayer) {
            this.state.youTubePlayer.playVideo();
        }

        // If the volume is below 100 we want to fade it back in over the coures of 5 seconds
        if (this.state.volume < 100) {
            this.setState({});

            let fadeInId = setInterval(function (self) {
                if (self.state.volume < 100) {
                    let newVolume = self.state.volume + 5;
                    self.state.youTubePlayer.setVolume(newVolume);
                    self.setState({ volume: newVolume });
                }
            }, 250, this);

            setTimeout(function (self) {
                clearInterval(fadeInId);
            }, 5000, this)
        }
    }

    bindYouTubePlayer(event) {
        this.setState({
            youTubePlayer: event.target
        });

        // Check for scheduled programming
        checkForScheduledShow(this.populatePlayer);

        // Start the player runner
        this.startYouTubePlayerRunner();
    }

    startYouTubePlayerRunner() {
        setInterval(function (self) {
            self.setState({ numberOfListeners: Math.abs(self.state.numberOfListeners + (Math.round(Math.random() * 2 - 1))) })

            if (self.state.playing === PlayerConstants.HDR) {
                // If HDR is playing we want to check for programming
                checkForScheduledShow(self.playScheduledProgramming);
            } else if (self.state.playing === PlayerConstants.PROGRAMMING) {
                // If programming is already playing we don't really care
                return;
            }
        }, 60000, this);
    }

    handleYoutubeError(event) {
        /*
            event.data will be one of the following
            2 – The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.
            5 – The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.
            100 – The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.
            101 – The owner of the requested video does not allow it to be played in embedded players.
            150 – This error is the same as 101. It's just a 101 error in disguise!
        */

        console.log(event.data);

        this.state.youTubePlayer.nextVideo();
    }

    /*
        Function that will populate the player and start playing
     */
    populatePlayer(toPlay) {
        // If what we're playing is a video we want to make sure it's still going, so we fetch its duration and handle accordingly
        if (toPlay.videoId) {
            fetchVideoDuration(toPlay, this.playVideoAtTime, this.loadPlayer);
        } else {
            // Otherwise it is a playlist and we fetch its videos and start playing
            fetchPlaylistVideos(toPlay.playlistId, [], undefined, "contentDetails", this.loadPlayer);
        }

        // Update the active program to what's playing now
        this.setState({
            activeProgram: toPlay
        })
    }

    playScheduledProgramming(toPlay) {
        // If we are supposed to play a video, fetch it and start playing
        if (toPlay.videoId) {
            fetchVideoDuration(toPlay, this.playVideoAtTime, this.loadPlayer);
        } else if (toPlay.name !== this.state.activeProgram.name) {
            // Otherwise we want to check and see if we're playing a new playlist. If we are load its videos and play it
            fetchPlaylistVideos(toPlay.playlistId, [], undefined, "contentDetails", this.loadPlayer);
        }

        // Update the active program to what's playing now
        this.setState({
            activeProgram: toPlay
        })
    }

    playVideoAtTime(videoId, startTime) {
        // If we're less than a minute behind start it at 1 second for people tuning in a lil late
        startTime = startTime > 60 ? startTime : 1;

        // Load the video at the right time and play it
        this.state.youTubePlayer.loadVideoById(videoId, startTime);
        this.state.youTubePlayer.playVideo();

        this.setState({
            playing: PlayerConstants.PROGRAMMING,
            activePlayer: PlayerConstants.YOUTUBE
        });
    }

    loadPlayer(videos) {
        // Load the player with whatever videos it's supposed to have and play it
        videos = videos.map(video => video.videoId)

        this.state.youTubePlayer.loadPlaylist({
            playlist: shuffle(videos)
        });

        this.setState({
            playing: PlayerConstants.HDR,
            activePlayer: PlayerConstants.YOUTUBE
        });
    }

    handleYouTubeStateChange(event) {
        switch (event.data) {
            case YTConstants.PLAYING:
                this.setState({
                    'videoTitle': this.state.youTubePlayer.getVideoData().title,
                });
                break;
            default:
                break;
        }
        // If we're playing scheduled programming
        if (this.state.playing === PlayerConstants.PROGRAMMING) {
            // If the programming has ended, we want to checkForScheduledShow again 
            // in case there's something else we should play
            switch (event.data) {
                case YTConstants.ENDED:
                    checkForScheduledShow(this.populatePlayer);
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        let loader = this.state.videoTitle === '...' ? <Loader type="Audio" color="Black" height={getMaxVideoHeight()} width={100} timeout={3000} /> : null;

        return (
            <div className="listenContainer">
                <VideoHeader videoTitle={this.state.videoTitle} numberOfListeners={this.state.numberOfListeners} activeProgramName={this.state.activeProgram.name} />
                {loader}
                <YouTubePlayer onInitialize={this.bindYouTubePlayer} onError={this.handleYoutubeError} onStateChange={this.handleYouTubeStateChange} visible={this.state.activePlayer === PlayerConstants.YOUTUBE && this.state.youTubePlayer} />
                <TwitchPlayer onInitialize={this.bindTwitchPlayer} visible={this.state.videoTitle === "Hip Dad Radio LIVE"} />
                <h2>Fall Schedule:</h2>
                <ScheduleContainer activeProgramId={this.state.activeProgram.programId} />
                <hr />
            </div>
        )
    }
}
