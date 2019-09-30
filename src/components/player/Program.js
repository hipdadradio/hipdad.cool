import React from 'react';

import { convertFromMilitaryTime } from '../../util/AppUtil';

export class Program extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    render() {
        let className = "programBox";

        // If we are the active program, we want to append an additional className
        if (this.props.active) {
            className += "  activeProgramBox";
        }

        return (
            <div className={className}>
                <h4>{this.props.program.name}</h4>
                <p>{convertFromMilitaryTime(this.props.program.time)}</p>
            </div>
        );
    }
}