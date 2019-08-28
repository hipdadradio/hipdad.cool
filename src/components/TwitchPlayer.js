import React from 'react';

const Twitch = window.Twitch;

export class TwitchPlayer extends React.Component {
    componentDidMount() {
        this.props.onInitialize(new Twitch.Player("TwitchPlayer", { channel: "hipdadradio" }));
    }
    render() {
        return (
            <>
                <div id="TwitchPlayer" className="noInteraction" hidden={!this.props.visible} />
                <div dangerouslySetInnerHTML={{ __html: `<iframe id="hipdadradio" src="https://www.twitch.tv/embed/hipdadradio/chat" scrolling="yes" height="300" width="640"></iframe>` }} hidden={!this.props.visible} />
            </>
        );
    }
}