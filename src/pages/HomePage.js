import React from 'react';

import { AboutContainer } from '../containers/about/AboutContainer';
import { MailingListFormContainer } from '../containers/contact/MailingListFormContainer';
import { ScheduleContainer } from '../containers/shows/ScheduleContainer';
import { YouTubeVideoContainer } from '../containers/shows/YouTubeVideoContainer';
import { FiveKFormContainer } from '../containers/contact/FiveKFormContainer';
import { TshirtFormContainer } from '../containers/contact/TshirtFormContainer';

/*
    Container that holds the Home page
 */
export class HomePage extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <h2>Announcing the Hip Dad Radio 5k!</h2>
                <YouTubeVideoContainer src="2ibYuzl_EsA" title="On your marks... get set... GO!!" />
                <hr />
                <FiveKFormContainer />
                <div className="textContainer">
                    <h3>Logistics</h3>
                    <strong>Where:</strong> Start of the 606 Trail at Walsh Park on Ashland Ave<br />
                    <strong>When:</strong> November 9th, 2019 - Race starts at 9am SHARP<br />
                    <strong>Why:</strong> Because Hip Dad Radio promotes a healthy lifestyle, which includes cardio exercise!<br />
                    <h3>Entry into 5k is $20</h3>
                    <strong>This includes:</strong> The BRAND NEW Hip Dad Radio T-shirt, a snack at the end of the race.
                </div>
                <hr />
                <TshirtFormContainer />
                <hr />
                <h2>Check out the Fall Schedule!</h2>
                <ScheduleContainer />
                <hr />
                <MailingListFormContainer />
                <hr />
                <AboutContainer />
            </div>
        );
    }
}