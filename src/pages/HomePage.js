import React from 'react';

import { AboutContainer } from '../containers/about/AboutContainer';
import { YouTubeVideoContainer } from '../containers/shows/YouTubeVideoContainer';
import { MailingListFormContainer } from '../containers/contact/MailingListFormContainer';

/*
    Container that holds the Home page
 */
export class HomePage extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <h3>Welcome to the future of radio...</h3>
                <YouTubeVideoContainer src="YcLpNPvFoXk" title="Missed the Keynote? Watch the whole thing right here." description="" />
                <MailingListFormContainer />
                <hr />
                <AboutContainer />
            </div>
        );
    }
}