import React from 'react';

import { convertFromMilitaryTime } from '../../util/AppUtil';

export class Program extends React.Component {
    render() {
        return (
            <div className="programBox">
                <h4>{this.props.program.name}</h4>
                <p>{convertFromMilitaryTime(this.props.program.time)}</p>
            </div>
        );
    }
}