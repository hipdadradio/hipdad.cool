import React from 'react';

import { getMaxVideoHeight, getMaxVideoWidth, isMobileDevice } from '../../util/AppUtil';

const Twitch = window.Twitch;

export class TwitchPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobileDevice: isMobileDevice()
        };
    }

    componentDidMount() {
        const opts = {
            channel: "hipdadradio",
            height: getMaxVideoHeight(),
            width: getMaxVideoWidth()
        }

        this.props.onInitialize(new Twitch.Player("TwitchPlayer", opts));
    }
    render() {
        return (
            <>
                <div id="TwitchPlayer" className={this.state.isMobileDevice ? "" : "noInteraction"} hidden={!this.props.visible} />
                <div dangerouslySetInnerHTML={{ __html: `<iframe id="hipdadradio" src="https://www.twitch.tv/embed/hipdadradio/chat" scrolling="yes" frameborder="0" height="500" width="` + getMaxVideoWidth() + `"></iframe>` }} hidden={!this.props.visible} />
            </>
        );
    }
}