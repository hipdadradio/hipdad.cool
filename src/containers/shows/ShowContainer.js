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
                <div className="textContainer">
                    <h2>{this.props.show.title}</h2>
                    <h3>{this.props.show.desc}</h3>
                </div>
                <hr />
                <div>
                    <YouTubePlaylistContainer playlistId={this.props.show.playlistId} />
                </div>
            </>
        );
    }
}