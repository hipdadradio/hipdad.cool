import React from 'react';

import DBConstants from '../data/DBConstants.json';
import APIConstants from '../data/APIConstants.json'

// Cache
let dataCache = {};

export const fetchPhotoArchives = (handleFetchedPhotos) => {
    if (dataCache[DBConstants.PHOTOS] !== undefined) {
        handleFetchedPhotos(dataCache[DBConstants.PHOTOS]);
    } else {
        const Http = new XMLHttpRequest();

        const url = buildPhotosUrl();

        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    // If we have a successful request, we will parse the response
                    let photoData = JSON.parse(Http.responseText);

                    // Get rid of the first row of the sheet
                    let photos = photoData.values.splice(1);

                    // Assign response to dataCache[DBConstants.PHOTOS]
                    dataCache[DBConstants.PHOTOS] = photos;

                    handleFetchedPhotos(photos);
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

export const fetchHipDadDjs = (handleFetchedDjs) => {
    if (dataCache[DBConstants.DJS] !== undefined) {
        handleFetchedDjs(dataCache[DBConstants.DJS]);
    } else {
        const Http = new XMLHttpRequest();

        const url = buildDjsUrl();

        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    // If we have a successful request, we will parse the response
                    let djsData = JSON.parse(Http.responseText);

                    // Get rid of the first row of the sheet
                    let djs = djsData.values.splice(1);

                    // Assign response to dataCache[DBConstants.DJS]
                    dataCache[DBConstants.DJS] = djs;

                    handleFetchedDjs(djs);
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

export const fetchHipDadNews = (handleFetchedNews) => {
    if (dataCache[DBConstants.NEWS] !== undefined) {
        handleFetchedNews(dataCache[DBConstants.NEWS]);
    } else {
        const Http = new XMLHttpRequest();

        const url = buildNewsUrl();

        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    // If we have a successful request, we will parse the response
                    let newsData = JSON.parse(Http.responseText);

                    // Get rid of the first row of the sheet
                    let news = newsData.values.splice(1);

                    // Assign response to dataCache[DBConstants.SCHEDULE]
                    dataCache[DBConstants.NEWS] = news;

                    handleFetchedNews(news);
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

/*
    Function that fetches and handles videos to play from google sheets
 */
export const checkForScheduledShow = (playScheduledProgramming, handleFetchingPlaylist) => {
    if (dataCache[DBConstants.SCHEDULE] !== undefined) {
        let videoToPlay = checkForVideoToPlay(dataCache[DBConstants.SCHEDULE]);

        // If we have a video to play, lets call our callback function with the video's videoId and startTime
        if (videoToPlay.shouldPlay) {
            playScheduledProgramming(videoToPlay.videoId, videoToPlay.startTime);
        } else if (handleFetchingPlaylist) {
            handleFetchingPlaylist();
        }
    } else {
        // Initiate the http request object
        const Http = new XMLHttpRequest();

        const url = buildScheduleURL();

        // Function that will run once the Http request gets a response
        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    // If we have a successful request, we will parse the response and check if we have a video to play
                    let scheduleData = JSON.parse(Http.responseText);

                    // Get rid of the first row of the sheet
                    let scheduledShows = scheduleData.values.splice(1);

                    // Assign response to dataCache[DBConstants.SCHEDULE]
                    dataCache[DBConstants.SCHEDULE] = scheduledShows;

                    let videoToPlay = checkForVideoToPlay(scheduledShows);

                    // If we have a video to play, lets call our callback function with the video's videoId and startTime
                    if (videoToPlay.shouldPlay) {
                        playScheduledProgramming(videoToPlay.videoId, videoToPlay.startTime);
                    } else if (handleFetchingPlaylist) {
                        handleFetchingPlaylist();
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

export const fetchSchedule = (callback) => {
    if (dataCache[DBConstants.SCHEDULE] !== undefined) {
        callback(dataCache[DBConstants.SCHEDULE]);
    } else {
        // Initiate the http request object
        const Http = new XMLHttpRequest();

        const url = buildScheduleURL();

        // Function that will run once the Http request gets a response
        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    // If we have a successful request, we will parse the response and check if we have a video to play
                    let scheduleData = JSON.parse(Http.responseText);

                    // Get rid of the first row of the sheet
                    let scheduledShows = scheduleData.values.splice(1);

                    // Assign response to dataCache[DBConstants.SCHEDULE]
                    dataCache[DBConstants.SCHEDULE] = scheduledShows;
                    callback(dataCache[DBConstants.SCHEDULE]);
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

/*
    Function that will build the URL that is hit to fetch scheduled show data
 */
const buildScheduleURL = () => {
    let url = DBConstants.URL_ROOT;

    url += "/" + DBConstants.values.schedule.DB_ID;

    url += "/values/" + DBConstants.values.schedule.DB_VALUES;

    url += "?key=" + APIConstants.KEY;

    return url;
}

/*
    Function that will build the URL that is hit to fetch the news
 */
const buildNewsUrl = () => {
    let url = DBConstants.URL_ROOT;

    url += "/" + DBConstants.values.news.DB_ID;

    url += "/values/" + DBConstants.values.news.DB_VALUES;

    url += "?key=" + APIConstants.KEY;

    return url;
}

/*
    Function that will build the URL that is hit to fetch the djs
 */
const buildDjsUrl = () => {
    let url = DBConstants.URL_ROOT;

    url += "/" + DBConstants.values.djs.DB_ID;

    url += "/values/" + DBConstants.values.djs.DB_VALUES;

    url += "?key=" + APIConstants.KEY;

    return url;
}

const buildPhotosUrl = () => {
    let url = DBConstants.URL_ROOT;

    url += "/" + DBConstants.values.photos.DB_ID;

    url += "/values/" + DBConstants.values.photos.DB_VALUES;

    url += "?key=" + APIConstants.KEY;

    return url;
}

/* 
    Function that will take the array of arrays of scheduled shows and convert it to an array of objects
 */
export const parseScheduleData = (scheduleData) => {
    let shows = [];

    // Iterate over the scheduleData and turn each array entry into an object
    scheduleData.forEach(function (show) {
        shows.push({
            title: show[DBConstants.values.schedule.COLUMN_HEADERS.SHOW_TITLE],
            videoId: show[DBConstants.values.schedule.COLUMN_HEADERS.VIDEO_ID],
            startDate: Date.parse(show[DBConstants.values.schedule.COLUMN_HEADERS.START_DATE]),
            endDate: Date.parse(show[DBConstants.values.schedule.COLUMN_HEADERS.END_DATE]),
        });
    });

    return shows;
}

export const parsePhotoData = (photoData) => {
    let archives = [];

    var i = 0;

    while (i < photoData.length) {
        let currentRow = photoData[i];

        let album = {
            title: currentRow[DBConstants.values.photos.COLUMN_HEADERS.TITLE],
            author: currentRow[DBConstants.values.photos.COLUMN_HEADERS.AUTHOR],
            description: currentRow[DBConstants.values.photos.COLUMN_HEADERS.ALBUM_DESC]
        };

        let photos = [];

        photos.push({
            imgSrc: currentRow[DBConstants.values.photos.COLUMN_HEADERS.IMAGE_SRC],
            desc: currentRow[DBConstants.values.photos.COLUMN_HEADERS.IMAGE_DESC]
        });

        i++;

        while (i < photoData.length && !photoData[i][DBConstants.values.photos.COLUMN_HEADERS.TITLE]) {
            let photoRow = photoData[i]

            photos.push({
                imgSrc: photoRow[DBConstants.values.photos.COLUMN_HEADERS.IMAGE_SRC],
                desc: photoRow[DBConstants.values.photos.COLUMN_HEADERS.IMAGE_DESC]
            })

            i++;
        }

        album.photos = photos;

        archives.push(album);
    }

    return archives.reverse();
}

export const parseNewsData = (newsData) => {
    let news = [];

    newsData.forEach(function (newsItem) {
        news.push({
            date: newsItem[DBConstants.values.news.COLUMN_HEADERS.DATE],
            title: newsItem[DBConstants.values.news.COLUMN_HEADERS.TITLE],
            text: newsItem[DBConstants.values.news.COLUMN_HEADERS.TEXT],
            image: newsItem[DBConstants.values.news.COLUMN_HEADERS.IMAGE]
        })
    });

    return news.reverse();
}

export const parseDjs = (djsData) => {
    let djs = [];

    djsData.forEach(function (dj) {
        djs.push({
            name: dj[DBConstants.values.djs.COLUMN_HEADERS.NAME],
            bio: dj[DBConstants.values.djs.COLUMN_HEADERS.BIO],
            image: dj[DBConstants.values.djs.COLUMN_HEADERS.IMAGE],
        })
    });

    return djs;
}

export const formatTimeSpanString = (props) => {
    let startDate = new Date(props.startDate);
    let startDateString = startDate.toString();

    let endDate = new Date(props.endDate);
    let endDateString = endDate.toString();

    startDateString = startDateString.substring(0, startDateString.indexOf('GMT'));

    endDateString = endDateString.substring(16);

    return (
        <div>
            {startDateString} - {endDateString}
        </div>
    );
}

/*
    Function that will take in scheduleData retreived from google sheets and determine if a video should play
 */
const checkForVideoToPlay = (scheduledShows) => {
    // Convert show data to array of objects
    let showObjects = parseScheduleData(scheduledShows);

    // Get current time so we know what time we should be looking for in the shows
    let currentTime = Date.now();

    // Placeholder of video to play
    let videoToPlay = {
        shouldPlay: false,
    };

    // Iterate over each show object to check if we should play it
    showObjects.forEach(function (show) {
        if (show.startDate < currentTime && show.endDate > currentTime) {
            // It looks like we have a show that should play
            let startTime = 0;

            // Check to see if we're tuning in late!
            if (currentTime - show.startDate > 60000) {
                // If we are, adjust the startTime to where we should be
                startTime = (currentTime - show.startDate) / 1000;
            }

            // Set videoToPlay to the video as an object with its' videoId and startTime
            videoToPlay = {
                shouldPlay: true,
                videoId: show.videoId,
                startTime: startTime
            }
        }
    });

    // If we have nothing to play
    return videoToPlay;
}