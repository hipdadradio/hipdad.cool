import React from 'react';

import { Program } from './Program';

export class DailySchedule extends React.Component {
    render() {
        return (
            <div className="dailySchedule">
                <h4>{this.props.day}</h4>
                {this.props.schedule.map(program => (
                    <Program key={this.props.day + program.name + program.time} program={program} active={this.props.activeProgramId === program.programId} />
                ))}
            </div>
        )
    }
}