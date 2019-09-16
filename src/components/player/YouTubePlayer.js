import React from 'react';
import YouTube from 'react-youtube';

export class YouTubePlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opts: {
                height: '360',
                width: '640',
                playerVars: {
                    controls: 0
                }
            },
            isBig: false
        };
    }

    render() {
        return (
            <>
                <div hidden={!this.props.visible} className="noInteraction">
                    <YouTube opts={this.state.opts} onReady={this.props.onInitialize} onStateChange={this.props.onStateChange} />
                </div>
            </>
        )
    }
}