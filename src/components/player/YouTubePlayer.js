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

        this.goBigScreen = this.goBigScreen.bind(this);
        this.goSmallScreen = this.goSmallScreen.bind(this);
    }

    goBigScreen() {
        this.setState({
            opts: {
                height: window.innerHeight - 100,
                width: window.innerWidth - 100,
                playerVars: {
                    controls: 0
                }
            },
            isBig: true
        });
    }

    goSmallScreen() {
        this.setState({
            opts: {
                height: '360',
                width: '640',
                playerVars: {
                    controls: 0
                }
            },
            isBig: false
        })
    }

    render() {
        return (
            <>
                <div hidden={!this.props.visible} className="noInteraction">
                    <YouTube opts={this.state.opts} onReady={this.props.onInitialize} onStateChange={this.props.onStateChange} />
                </div>
                <div hidden={!this.props.visible}>
                    <button onClick={this.goSmallScreen} hidden={!this.state.isBig}>Go Small</button>
                    <button onClick={this.goBigScreen} hidden={this.state.isBig}>Go Big</button>
                </div>
            </>
        )
    }
}