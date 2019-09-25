// We have several constants that we use throughout this file
import APIConstants from '../data/APIConstants.json';

// Playlist cache
let playlistCache = {};

const getMsFromIsoDuration = (isoDuration) => {
    let timeString = isoDuration.substring(isoDuration.indexOf('T') + 1);

    let hours = 0, minutes = 0, seconds = 0;

    if (timeString.indexOf('H') > -1) {
        hours = parseInt(timeString.substring(0, timeString.indexOf('H')), 10);
        timeString = timeString.substring(timeString.indexOf('H') + 1);
    }

    if (timeString.indexOf('M') > -1) {
        minutes = parseInt(timeString.substring(0, timeString.indexOf('M')), 10);
        timeString = timeString.substring(timeString.indexOf('M') + 1);
    }

    seconds = parseInt(timeString.substring(0, timeString.indexOf('S')), 10);

    let secondDuration = seconds + (minutes * 60) + (hours * 3600);

    let msDuration = secondDuration * 1000;

    return msDuration;
}

export const fetchVideoDuration = (videoId, callback) => {
    // Initiate the http request object
    let Http = new XMLHttpRequest();

    // The tail of the request will include the playlist id as well as the API key
    let requestTail = "&id=" + videoId + "&key=" + APIConstants.KEY;

    let url = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails' + requestTail;

    // Function that will run once the Http request gets a response
    Http.onload = function (e) {
        if (Http.readyState === 4) {
            if (Http.status === 200) {
                // If we have a successful request, we will parse the response and append each item to the list of videoIds
                let videoData = JSON.parse(Http.responseText);

                let duration = getMsFromIsoDuration(videoData.items[0].contentDetails.duration)

                callback(duration);
            } else {
                callback(0);
            }
        }
    };

    // Code to execute the http request
    Http.open("GET", url, true);
    Http.send();

}

/* 
    Function that will recursively fetch and populate an array of videoIds
 */
export const fetchPlaylistVideos = (playlistId, videoIds, nextPageToken, part, callback) => {
    if (playlistCache[playlistId] !== undefined) {
        // We already have the playlist cached so we don't need to make another call
        callback(playlistCache[playlistId]);
    } else {
        // Initiate the http request object
        let Http = new XMLHttpRequest();

        // The tail of the request will include the playlist id as well as the API key
        let requestTail = "&playlistId=" + playlistId + "&key=" + APIConstants.KEY;

        // If we have been passed in a nextPageToken we will want to add that to the end of the requestTail as well
        requestTail = nextPageToken ? requestTail + "&pageToken=" + nextPageToken : requestTail;

        let url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=' + part + '&maxResults=50' + requestTail;

        // Function that will run once the Http request gets a response
        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    // If we have a successful request, we will parse the response and append each item to the list of videoIds
                    let playlistData = JSON.parse(Http.responseText);
                    playlistData.items.forEach(function (item) {
                        videoIds.push({
                            videoId: item.contentDetails.videoId,
                            title: item.snippet ? item.snippet.title : undefined,
                            description: item.snippet ? item.snippet.description : undefined
                        });
                    });

                    // If we have a nextPageToken in the response, that means there are more videos to fetch. 
                    if (playlistData.nextPageToken && playlistData.items.length < 199) {
                        // That means that we will have to fetch more videos! 
                        fetchPlaylistVideos(playlistId, videoIds, playlistData.nextPageToken, part, callback);
                    } else {
                        // Assign the videoIds to the playlistCache
                        playlistCache[playlistId] = videoIds;

                        // Otherwise we have all the videos we need and can start the player
                        callback(videoIds);
                    }
                } else {
                    console.error(Http.statusText);
                }
            }
        };

        // Code to execute the http request
        Http.open("GET", url, true);
        Http.send();
    }
}
