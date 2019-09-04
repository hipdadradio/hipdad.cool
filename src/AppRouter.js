import React from 'react';

import { NewsPageContainer } from './containers/NewsPageContainer';
import { ShowContainer } from './containers/ShowContainer';
import { HomeContainer } from './containers/HomeContainer';
import { PlayerContainer } from './containers/PlayerContainer';
import { ContactContainer } from './containers/ContactContainer';
import { PhotoPageContainer } from './containers/PhotoPageContainer';
import { ShowsPage } from './pages/ShowsPage';

import YTConstants from './data/YTConstants.json';

// Home Page
export const Home = () => {
  return <HomeContainer />;
}

// News page
export const News = () => {
  return <NewsPageContainer />;
}

export const Listen = () => {
  return <PlayerContainer />;
}

// Hdr Newshour route
export const HdrNewshour = () => {
  return <ShowContainer playlistId={YTConstants.HDR_ID} title="HDR Newshour" />;
}

// Hot Sandwich route
export const HotSandwich = () => {
  return <ShowContainer playlistId={YTConstants.HOT_SANDWICH_ID} title="Hot Sandwich" />;
}

export const HipDadAds = () => {
  return <ShowContainer playlistId={YTConstants.HIP_DAD_ADS_ID} title="Hip Dad Ads" />
}

export const ContactUs = () => {
  return <ContactContainer title="Contact Us" />
}

export const Photos = () => {
  return <PhotoPageContainer />
}

export const Shows = () => {
  return <ShowsPage />
}