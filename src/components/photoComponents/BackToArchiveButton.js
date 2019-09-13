import React from 'react';

export class BackToArchiveButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClick} style={{ float: "right" }}>Back to Archives</button>
        )
    }
}