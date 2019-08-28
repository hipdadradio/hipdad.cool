import React from 'react';

import { DJContainer } from './DJContainer';

/*
    Container that holds the About page
 */
export class AboutContainer extends React.Component {
    render() {
        return (
            <div>
                <h2>About Hip Dad Radio</h2>
                <DJContainer />
            </div>
        )
    }
}