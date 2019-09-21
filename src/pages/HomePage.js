import React from 'react';

import { AboutContainer } from '../containers/about/AboutContainer';
/*
    Container that holds the Home page
 */
export class HomePage extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <h2>You found us!</h2>
                <h4>Here is a bit about Hip Dad Radio</h4>
                <p>Words words words words words words words words words</p>
                <hr />
                <AboutContainer />
            </div>
        );
    }
}