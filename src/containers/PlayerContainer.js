import React from 'react';

import { Player } from '../components/Player';

/*
    Container that holds the Player
 */
export class PlayerContainer extends React.Component {
    render() {
        return (
            <div>
                <Player />
            </div>
        );
    }
}