import React from 'react';

import { AboutContainer } from '../containers/about/AboutContainer';
import { YouTubeVideoContainer } from '../containers/shows/YouTubeVideoContainer';
/*
    Container that holds the Home page
 */
export class HomePage extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <h2>Welcome to the FUTURE OF RADIO!</h2>
                <YouTubeVideoContainer src="lOs6MvrmK6U" title="Grab a seat and listen up." description="" />
                <hr />
                <AboutContainer />
            </div>
        );
    }
}