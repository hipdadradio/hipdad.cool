import React from 'react';

import { ScheduleContainer } from '../containers/ScheduleContainer';
import { YouTubePlayer } from '../components/YouTubePlayer';
import { TwitchPlayer } from '../components/TwitchPlayer';
import { checkForScheduledShow } from '../util/DBUtil';
import { fetchPlaylistVideos } from '../util/YouTubeUtil';
import { shuffle } from '../util/DataUtil';
import { VideoHeader } from './VideoHeader';

import PlayerConstants from '../data/PlayerConstants.json';
import YTConstants from '../data/YTConstants.json';

const Twitch = window.Twitch;

// The playlist ID we use to populate a player
const PLAYLIST_ID = YTConstants.PLAYLIST_ID

// Variable to keep track of how many seconds the player has waited to start
let unstartedSeconds = 0;


/*
    Container that holds the Player page
 */
export class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePlayer: "",
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
        this.startBlockedYouTubeVideoChecker = this.startBlockedYouTubeVideoChecker.bind(this);
        this.handleFetchingPlaylist = this.handleFetchingPlaylist.bind(this);
        this.startYouTubePlayer = this.startYouTubePlayer.bind(this);
        this.playScheduledProgramming = this.playScheduledProgramming.bind(this);
        this.handleYouTubeStateChange = this.handleYouTubeStateChange.bind(this);
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
                videoTitle: "Hip Dad Radio: LIVE"
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
        this.setState({ youTubePlayer: event.target });

        // Check for scheduled programming
        checkForScheduledShow(this.playScheduledProgramming, this.handleFetchingPlaylist);

        // Start the player runner
        this.startYouTubePlayerRunner();

        // Start the blocked video checker
        this.startBlockedYouTubeVideoChecker();
    }

    /*
        Function that will start a runner that checks the youtube player state every second
        Handles state appropriately
    */
    startYouTubePlayerRunner() {
        setInterval(function (self) {
            if (self.state.playing === PlayerConstants.HDR) {
                // If HDR is playing we want to check for programming
                checkForScheduledShow(self.playScheduledProgramming);
            } else if (self.state.playing === PlayerConstants.PROGRAMMING) {
                // If programming is already playing we don't really care
                return;
            }
        }, 60000, this);
    }

    /*
        Function that will check every second to see if a video playing is blocked and should be skipped
    */
    startBlockedYouTubeVideoChecker() {
        setInterval(
            function (self) {
                self.setState({ numberOfListeners: self.state.numberOfListeners + (Math.round(Math.random() * 2 - 1)) })

                // If we're playing the playlist check the state of the player
                if (self.state.playing === PlayerConstants.HDR) {
                    // If we've been waiting over 2 seconds, skip the video
                    if (unstartedSeconds > 2) {
                        // Play the next video and reset the count
                        self.state.youTubePlayer.nextVideo();
                        unstartedSeconds = 0;
                    } else if (self.state.youTubePlayer.getPlayerState() === YTConstants.UNSTARTED) {
                        // Increment the number of seconds we've been waiting
                        unstartedSeconds += 1;
                    } else {
                        unstartedSeconds = 0;
                    }
                }
            }, 1000, this);
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
            activePlayer: PlayerConstants.YOUTUBE
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
            this.setState({ playing: PlayerConstants.HDR });
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
        return (
            <>
                <VideoHeader videoTitle={this.state.videoTitle} numberOfListeners={this.state.numberOfListeners} />
                <YouTubePlayer onInitialize={this.bindYouTubePlayer} onStateChange={this.handleYouTubeStateChange} visible={this.state.activePlayer === PlayerConstants.YOUTUBE && this.state.youTubePlayer} />
                <TwitchPlayer onInitialize={this.bindTwitchPlayer} visible={this.state.activePlayer === PlayerConstants.TWITCH && this.state.twitchPlayer} />
                <ScheduleContainer />
            </>
        )
    }
}
