import React from 'react';

import instalogo from '../../img/instalogo.png';
import ytlogo from '../../img/ytlogo.png';

export class PlatformLinkContainer extends React.Component {
    render() {
        return (
            <>
                <h3>Check us out on our platforms.</h3>
                <p>
                    <a className="ImageLinks" href="https://www.instagram.com/hipdadradio/" target="_blank" rel="noopener noreferrer"><img className="LogoImageContainer" src={instalogo} alt="instagramLogo" /></a>
                    <a className="ImageLinks" href="https://www.youtube.com/channel/UCfdin8x2dLREvJ5M-qAYU3A" target="_blank" rel="noopener noreferrer"><img className="LogoImageContainer" src={ytlogo} alt="youtubeLogo" /></a>
                </p>
            </>
        );
    }
}