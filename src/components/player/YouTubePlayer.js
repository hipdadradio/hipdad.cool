import React from 'react';
import YouTube from 'react-youtube';

import { getMaxVideoHeight, getMaxVideoWidth } from '../../util/AppUtil';

export class YouTubePlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opts: {
                height: getMaxVideoHeight(),
                width: getMaxVideoWidth(),
                playerVars: {
                    controls: 0,
                    autoplay: 0,
                    modestbranding: 1
                }
            }
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