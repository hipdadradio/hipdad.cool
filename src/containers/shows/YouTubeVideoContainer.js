import React from 'react';
import YouTube from 'react-youtube';

import { getMaxVideoHeight, getMaxVideoWidth } from '../../util/AppUtil';

/*
    Container that holds a YouTube video
 */
export const YouTubeVideoContainer = (props) => {
    let opts = {
        height: getMaxVideoHeight(),
        width: getMaxVideoWidth()
    }

    return (
        <div>
            <h3 className="textContainer">{props.title}</h3>
            <YouTube videoId={props.src} opts={opts} />
            <p className="textContainer">{props.description}</p>
        </div>
    )
}