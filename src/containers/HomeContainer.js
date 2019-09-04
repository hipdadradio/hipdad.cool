import React from 'react';

import { AboutContainer } from './AboutContainer';
/*
    Container that holds the Home page
 */
export class HomeContainer extends React.Component {
    render() {
        return (
            <>
                <h2>You found us!</h2>
                <h4>Here is a bit about Hip Dad Radio</h4>
                <p>Words words words words words words words words words</p>
                <AboutContainer />
            </>
        );
    }
}