import React from 'react';

import { HomeContainer } from './containers/HomeContainer';
import { ShowContainer } from './containers/ShowContainer';
import { AboutContainer } from './containers/AboutContainer';
import { PlayerContainer } from './containers/PlayerContainer';
import { ContactContainer } from './containers/ContactContainer';

import YTConstants from './data/YTConstants.json';

// Home page
export const Index = () => {
  return <HomeContainer />;
}

// About Page
export const About = () => {
  return <AboutContainer />;
}

export const Player = () => {
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
