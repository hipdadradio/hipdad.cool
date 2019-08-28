import React from 'react';

export class PlatformLinkContainer extends React.Component {
    render() {
        return (
            <>
                <p>
                    <h3>Check us out on our platforms.</h3>
                    <a className="ImageLinks" href="https://www.instagram.com/hipdadradio/" target="_blank" rel="noopener noreferrer"><img className="LogoImageContainer" src="http://www.transparentpng.com/thumb/logo-instagram/eerDTf-logo-instagram-clipart-transparent.png" alt="instagramLogo" /></a>
                    <a className="ImageLinks" href="https://www.youtube.com/channel/UCfdin8x2dLREvJ5M-qAYU3A" target="_blank" rel="noopener noreferrer"><img className="LogoImageContainer" src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png" alt="youtubeLogo" /></a>
                </p>
            </>
        );
    }
}