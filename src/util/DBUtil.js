import React from 'react';

import DBConstants from '../data/DBConstants.json';
import APIConstants from '../data/APIConstants.json'

import YTConstants from '../data/YTConstants';

// Cache
let dataCache = {};

// ##########################################################
// SHOWS
// ##########################################################

export const fetchShowsList = (handleFetchedShows) => {
    if (dataCache[DBConstants.SHOWS] !== undefined) {
        handleFetchedShows(dataCache[DBConstants.SHOWS]);
    } else {
        const Http = new XMLHttpRequest();

        const url = buildShowsUrl();

        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    // If we have a successful request, we will parse the response
                    let showsData = JSON.parse(Http.responseText);

                    // Get rid of the first row of the sheet
                    let shows = showsData.values.splice(1);

                    // Assign response to dataCache[DBConstants.PHOTOS]
                    dataCache[DBConstants.SHOWS] = parseShows(shows);

                    handleFetchedShows(dataCache[DBConstants.SHOWS]);
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
    Function that will build the URL that is hit to fetch the shows
 */
const buildShowsUrl = () => {
    let url = DBConstants.URL_ROOT;

    url += "/" + DBConstants.values.shows.DB_ID;

    url += "/values/" + DBConstants.values.shows.DB_VALUES;

    url += "?key=" + APIConstants.KEY;

    return url;
}

const parseShows = (showData) => {
    let shows = [];

    showData.forEach(function (show) {
        shows.push({
            title: show[DBConstants.values.shows.COLUMN_HEADERS.TITLE],
            desc: show[DBConstants.values.shows.COLUMN_HEADERS.DESCRIPTION],
            imagesrc: show[DBConstants.values.shows.COLUMN_HEADERS.IMAGE_SRC],
            playlistId: show[DBConstants.values.shows.COLUMN_HEADERS.PLAYLIST]
        })
    });

    return shows;
}


// ##########################################################
// PHOTOS
// ##########################################################

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
                    dataCache[DBConstants.PHOTOS] = parsePhotoData(photos);

                    handleFetchedPhotos(dataCache[DBConstants.PHOTOS]);
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


const buildPhotosUrl = () => {
    let url = DBConstants.URL_ROOT;

    url += "/" + DBConstants.values.photos.DB_ID;

    url += "/values/" + DBConstants.values.photos.DB_VALUES;

    url += "?key=" + APIConstants.KEY;

    return url;
}

const parsePhotoData = (photoData) => {
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

// ##########################################################
// DJS
// ##########################################################

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
                    dataCache[DBConstants.DJS] = parseDjs(djs);

                    handleFetchedDjs(dataCache[DBConstants.DJS]);
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
    Function that will build the URL that is hit to fetch the djs
 */
const buildDjsUrl = () => {
    let url = DBConstants.URL_ROOT;

    url += "/" + DBConstants.values.djs.DB_ID;

    url += "/values/" + DBConstants.values.djs.DB_VALUES;

    url += "?key=" + APIConstants.KEY;

    return url;
}

const parseDjs = (djsData) => {
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

// ##########################################################
// NEWS
// ##########################################################

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
                    dataCache[DBConstants.NEWS] = parseNewsData(news);

                    handleFetchedNews(dataCache[DBConstants.NEWS]);
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
    Function that will build the URL that is hit to fetch the news
 */
const buildNewsUrl = () => {
    let url = DBConstants.URL_ROOT;

    url += "/" + DBConstants.values.news.DB_ID;

    url += "/values/" + DBConstants.values.news.DB_VALUES;

    url += "?key=" + APIConstants.KEY;

    return url;
}

const parseNewsData = (newsData) => {
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

// ##########################################################
// SCHEDULE
// ##########################################################

export const checkForScheduledShow = (populateAndPlay) => {
    if (dataCache[DBConstants.SCHEDULE] !== undefined) {
        checkForVideoToPlay(dataCache[DBConstants.SCHEDULE], populateAndPlay);
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

                    let schedule = scheduleData.values.splice(1);

                    // Assign response to dataCache[DBConstants.SCHEDULE]
                    dataCache[DBConstants.SCHEDULE] = parseScheduleData(schedule);

                    checkForVideoToPlay(dataCache[DBConstants.SCHEDULE], populateAndPlay);
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
    Function that will take in scheduleData retreived from google sheets and determine if a video should play
 */
const checkForVideoToPlay = (schedule, populateAndPlay) => {
    // Get today's schedule
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const today = new Date();
    const hour = today.getHours();
    const dotw = today.getDay();

    let dailyProgramming = schedule[days[dotw]].slice(1);

    // Placeholder of video to play
    let toPlay = {
        name: 'HDR',
        videoId: '',
        startTime: 0,
        playlistId: YTConstants.PLAYLIST_ID,
        programId: -1
    };

    // Iterate over all of the daily programming and see where we are in the schedule
    dailyProgramming.forEach(function (program) {
        if (program.time <= hour) {
            toPlay.startTime = program.time;
            toPlay.name = program.name;
            toPlay.programId = program.programId;
            // This is a video based on the length of the ID
            if (program.id.length === 11) {
                toPlay.videoId = program.id;
                toPlay.playlistId = YTConstants.PLAYLIST_ID;
            } else {
                toPlay.videoId = '';
                toPlay.playlistId = program.id ? program.id : YTConstants.PLAYLIST_ID;
            }
        }
    });

    populateAndPlay(toPlay);
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

                    let schedule = scheduleData.values.splice(1);

                    // Assign response to dataCache[DBConstants.SCHEDULE]
                    dataCache[DBConstants.SCHEDULE] = parseScheduleData(schedule);
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

    url += "?majorDimension=COLUMNS";

    url += "&key=" + APIConstants.KEY;

    return url;
}

/* 
    Function that will take the array of arrays of scheduled shows and convert it to an array of objects
 */
const parseScheduleData = (scheduleData) => {
    // Initialize our schedule object
    let schedule = {};

    // Get the array of ids from the scheduleData
    let idsArray = scheduleData.slice(8);

    let ids = {}

    let programId = 1;

    // We iterate over the idsArray and create an association from a name to an ID
    for (var i = 1; i < idsArray[0].length; i++) {
        var key = idsArray[0][i];

        ids[key] = idsArray[1][i] ? idsArray[1][i] : "";
    }

    // Iterate over each day in the scheduledata
    for (var j = 0; j < 7; j++) {
        let day = scheduleData[j];

        // Each day has its own schedule
        let dailySchedule = [day[0]];

        // Iterate over each scheduled program in the array and create a program object for it
        for (var k = 1; k < day.length; k++) {
            if (day[k]) {
                dailySchedule.push({
                    time: k - 1,
                    name: day[k],
                    id: ids[day[k]],
                    programId: programId++
                });
            }
        }

        schedule[day[0]] = dailySchedule;
    }

    return schedule;
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