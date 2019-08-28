import React from 'react';
import YouTube from 'react-youtube';

/*
    Container that holds a YouTube video
 */
export const YouTubeVideoContainer = (props) => {
    return (
        <div>
            <h3 className="TextContainer">{props.title}</h3>
            <YouTube videoId={props.src} />
            <p className="TextContainer">{props.description}</p>
        </div>
    )
}