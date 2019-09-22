import React from 'react';

import { AboutContainer } from '../containers/about/AboutContainer';
import { YouTubeVideoContainer } from '../containers/shows/YouTubeVideoContainer';
import { MailingListFormContainer } from '../containers/contact/MailingListFormContainer';

import Loader from 'react-loader-spinner'

/*
    Container that holds the Home page
 */
export class HomePage extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <h3>Welcome to the future of radio...</h3>
                <YouTubeVideoContainer src="lOs6MvrmK6U" title="Grab a seat and listen up." description="" />
                <h4 className="textContainer">Hip Dad Radio is a multimedia worldide entertainment conglomerate. Fron the paris of the plains to THE American City, head south for a little southern comfort. Echoing off the cold walls of the Berlin night clubs. An endless stream of content fuels these jets. Hip Dad Radio is the future of internet radio. Welcome.</h4>
                <MailingListFormContainer />
                <hr />
                <AboutContainer />
            </div>
        );
    }
}