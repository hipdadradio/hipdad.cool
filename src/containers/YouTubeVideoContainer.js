import React from 'react';
import YouTube from 'react-youtube';

/*
    Container that holds a YouTube video
 */
export const YouTubeVideoContainer = (props) => {
    return (
        <div>
            <h3 className="textContainer">{props.title}</h3>
            <YouTube videoId={props.src} />
            <p className="textContainer">{props.description}</p>
        </div>
    )
}