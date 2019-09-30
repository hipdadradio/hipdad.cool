import React from 'react';

import { AboutContainer } from '../containers/about/AboutContainer';
import { MailingListFormContainer } from '../containers/contact/MailingListFormContainer';
import { ScheduleContainer } from '../containers/shows/ScheduleContainer';

/*
    Container that holds the Home page
 */
export class HomePage extends React.Component {
    render() {
        return (
            <div className="homeContainer">
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