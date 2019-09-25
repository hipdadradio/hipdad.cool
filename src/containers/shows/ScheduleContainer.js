import React from 'react';

import { fetchSchedule } from '../../util/DBUtil';
// import { ScheduledProgramDescriptor } from '../../components/player/ScheduledProgramDescriptor';
import { DailySchedule } from '../../components/player/DailySchedule';

export class ScheduleContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schedule: []
        }

        this.populateSchedule = this.populateSchedule.bind(this);
        this.orderedSchedule = this.orderSchedule.bind(this);
    }

    orderSchedule(schedule) {
        const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        const today = new Date();
        const dotw = today.getDay();

        const orderedDays = days.slice(dotw).concat(days.slice(0, dotw));

        let orderedSchedule = [];

        orderedDays.forEach(day => {
            orderedSchedule.push(schedule[day]);
        });

        return orderedSchedule;
    }

    populateSchedule(schedule) {
        let orderedSchedule = this.orderSchedule(schedule);
        this.setState({ schedule: orderedSchedule });
    }

    componentWillMount() {
        fetchSchedule(this.populateSchedule);
    }

    render() {
        return (
            <div className="scheduleContainer">
                {this.state.schedule.map(day => (
                    <DailySchedule key={day[0]} day={day[0]} schedule={day.slice(1)} />
                ))}
            </div>
        );
    }
}