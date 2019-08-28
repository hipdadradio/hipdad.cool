import React from 'react';

import { YouTubeVideoContainer } from './YouTubeVideoContainer';
import { fetchPlaylistVideos } from '../util/YouTubeUtil';

/*
    Container that holds a YouTube playlist
 */
export class YouTubePlaylistContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
            visableEpisodes: [],
            page: 0
        };

        this.updateVisibleEpisodes = this.updateVisibleEpisodes.bind(this);
        this.initialEpisodePopulation = this.initialEpisodePopulation.bind(this);
        this.handleOlderEpisodes = this.handleOlderEpisodes.bind(this);
        this.handleNewerEpisodes = this.handleNewerEpisodes.bind(this);
    }

    initialEpisodePopulation(episodes) {
        this.setState({
            episodes: episodes,
            visableEpisodes: episodes.slice(0, 5)
        })
    }

    updateVisibleEpisodes(page) {
        this.setState({
            visableEpisodes: this.state.episodes.slice(page * 5, page * 5 + 5),
            page: page
        });
    }

    handleOlderEpisodes() {
        this.scrollToTop();
        this.updateVisibleEpisodes(this.state.page + 1)
    }

    handleNewerEpisodes() {
        this.scrollToTop();
        this.updateVisibleEpisodes(this.state.page - 1)
    }

    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    componentWillMount() {
        fetchPlaylistVideos(this.props.playlistId, [], undefined, "contentDetails,snippet", this.initialEpisodePopulation)
    }

    render() {
        // It will render a YouTubeVideoContainer for each episode in its' passed in props.episodes
        const newerVideosExist = this.state.page;
        const olderVideosExist = this.state.episodes.length > (this.state.page + 1) * 5;

        return (
            <div>
                {this.state.visableEpisodes.map(episode => (
                    <YouTubeVideoContainer key={episode.videoId} src={episode.videoId} title={episode.title} description={episode.description} />
                ))}
                <button id="Newer Episode" onClick={this.handleNewerEpisodes} hidden={!newerVideosExist}>Newer Videos</button>
                <button id="Older Episodes" onClick={this.handleOlderEpisodes} hidden={!olderVideosExist}>Older Videos</button>
            </div>
        );
    }
}
