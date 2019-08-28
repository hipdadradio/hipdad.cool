import React from 'react';

export const VideoHeader = (props) => {
    return (
        <h4 className="TextContainer">
            <strong>
                You're Listening to HDR <br />
                Now Playing: {props.videoTitle} <br />
            </strong>
        </h4>
    )
}