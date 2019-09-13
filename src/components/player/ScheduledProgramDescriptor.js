import React from 'react';

import { formatTimeSpanString } from '../../util/DBUtil';

export class ScheduledProgramDescriptor extends React.Component {
    render() {
        return (
            <div>
                {this.props.title}<br />
                {formatTimeSpanString(this.props)}<br />
            </div>
        )
    }
}