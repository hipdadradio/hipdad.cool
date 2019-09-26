import React from 'react';

import { ScheduleContainer } from '../../containers/shows/ScheduleContainer';
import { YouTubePlayer } from './YouTubePlayer';
import { TwitchPlayer } from './TwitchPlayer';
import { checkForScheduledShow } from '../../util/DBUtil';
import { fetchPlaylistVideos } from '../../util/YouTubeUtil';
import { shuffle } from '../../util/DataUtil';
import { VideoHeader } from './VideoHeader';
import Loader from 'react-loader-spinner';

import PlayerConstants from '../../data/PlayerConstants.json';
import YTConstants from '../../data/YTConstants.json';
import { getMaxVideoHeight } from '../../util/AppUtil';

const Twitch = window.Twitch;

// The playlist ID we use to populate a player
const PLAYLIST_ID = YTConstants.PLAYLIST_ID

// Variable to keep track of how many seconds the player has waited to start
// let unstartedSeconds = 0;


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
            numberOfListeners: Math.round(Math.random() * 100),
            twitchPlayer: undefined,
            youTubePlayer: undefined
        };

        this.bindTwitchPlayer = this.bindTwitchPlayer.bind(this);
        this.bindYouTubePlayer = this.bindYouTubePlayer.bind(this);
        this.showTwitch = this.showTwitch.bind(this);
        this.hideTwitch = this.hideTwitch.bind(this);
        this.startYouTubePlayerRunner = this.startYouTubePlayerRunner.bind(this);
        this.handleFetchingPlaylist = this.handleFetchingPlaylist.bind(this);
        this.startYouTubePlayer = this.startYouTubePlayer.bind(this);
        this.playScheduledProgramming = this.playScheduledProgramming.bind(this);
        this.handleYouTubeStateChange = this.handleYouTubeStateChange.bind(this);
        this.handleYoutubeError = this.handleYoutubeError.bind(this);
    }

    bindTwitchPlayer(twitchPlayer) {
        // Add twitch event listeners here
        this.setState({ twitchPlayer });

        twitchPlayer.addEventListener(Twitch.Player.PLAYING, this.showTwitch);
        twitchPlayer.addEventListener(Twitch.Player.OFFLINE, this.hideTwitch);
    }

    showTwitch() {
        this.setState({ volume: this.state.youTubePlayer.getVolume() });

        let fadeOutId = setInterval(function (self) {
            if (self.state.volume > 0) {
                let newVolume = self.state.volume - 5;
                self.state.youTubePlayer.setVolume(newVolume);
                self.setState({ volume: newVolume });
            }
        }, 250, this);

        setTimeout(function (self) {
            clearInterval(fadeOutId);

            self.setState({
                activePlayer: PlayerConstants.TWITCH,
                videoTitle: "Hip Dad Radio LIVE"
            });

            if (self.state.youTubePlayer) {
                self.state.youTubePlayer.pauseVideo();
            }
        }, 5000, this);
    }

    hideTwitch() {
        this.setState({
            activePlayer: PlayerConstants.YOUTUBE,
            volume: this.state.youTubePlayer ? this.state.youTubePlayer.getVolume() : 100
        });

        if (this.state.youTubePlayer) {
            this.state.youTubePlayer.playVideo();
        }

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
        checkForScheduledShow(this.playScheduledProgramming, this.handleFetchingPlaylist);

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
        Helper function that calls fetchPlaylistVideos with all necessary parameters
     */
    handleFetchingPlaylist() {
        // Fetch the playlist videos
        fetchPlaylistVideos(PLAYLIST_ID, [], undefined, "contentDetails", this.startYouTubePlayer);
    }

    /*
        Function that will play a scheduled program and update the state of the player
     */
    playScheduledProgramming(videoID, startTime) {
        // Load the video into the player and play it
        this.state.youTubePlayer.loadVideoById(videoID, startTime);
        this.state.youTubePlayer.playVideo();

        // Update the currentlyPlaying variable to signal that we're playing scheduled programming
        this.setState({
            playing: PlayerConstants.PROGRAMMING,
            activePlayer: PlayerConstants.YOUTUBE,
        });
    }

    /* 
        Function that loads a passed in array of videoIds and starts the player
    */
    startYouTubePlayer(videos) {
        videos = videos.map(video => video.videoId)

        this.state.youTubePlayer.loadPlaylist({
            playlist: shuffle(videos)
        });

        if (this.state.activePlayer === PlayerConstants.YOUTUBE) {
            this.state.youTubePlayer.playVideo();
            this.setState({
                playing: PlayerConstants.HDR
            });
        }
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
                    checkForScheduledShow(this.playScheduledProgramming, this.handleFetchingPlaylist);
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        let loader = this.state.videoTitle === '...' ? <Loader type="Audio" color="Black" height={getMaxVideoHeight()} width={100} timeout={999999} /> : null;

        return (
            <div className="listenContainer">
                <VideoHeader videoTitle={this.state.videoTitle} numberOfListeners={this.state.numberOfListeners} />
                {loader}
                <YouTubePlayer onInitialize={this.bindYouTubePlayer} onError={this.handleYoutubeError} onStateChange={this.handleYouTubeStateChange} visible={this.state.activePlayer === PlayerConstants.YOUTUBE && this.state.youTubePlayer && this.state.videoTitle !== '...'} />
                <TwitchPlayer onInitialize={this.bindTwitchPlayer} visible={this.state.videoTitle === "Hip Dad Radio LIVE"} />
                <h2>Fall Schedule:</h2>
                <ScheduleContainer />
            </div>
        )
    }
}
