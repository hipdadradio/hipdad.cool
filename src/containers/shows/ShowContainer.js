import React from 'react';

import { YouTubePlaylistContainer } from './YouTubePlaylistContainer';

/*
    Container that holds a Show page
 */
export class ShowContainer extends React.Component {
    render() {
        // Translate the filtered playlist data into YouTubePlaylistContainer components
        return (
            <>
                <button onClick={this.props.backToShows}>Back to Shows</button>
                <h2>{this.props.title} Archive</h2>
                <div>
                    <YouTubePlaylistContainer playlistId={this.props.playlistId} />
                </div>
            </>
        );
    }
}