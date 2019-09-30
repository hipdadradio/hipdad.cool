import React from 'react';

export const VideoHeader = (props) => {
    return (
        <h4 className="textContainer">
            <strong>
                You're Listening to {props.activeProgramName}  <br />
                Now Playing: {props.videoTitle} <br />
                Number of Listeners: {props.numberOfListeners} <br />
            </strong>
        </h4>
    )
}