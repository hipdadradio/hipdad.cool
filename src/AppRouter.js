import React from 'react';

import { NewsPageContainer } from './containers/NewsPageContainer';
import { HomeContainer } from './containers/HomeContainer';
import { PlayerContainer } from './containers/PlayerContainer';
import { ContactContainer } from './containers/ContactContainer';
import { PhotoPageContainer } from './containers/PhotoPageContainer';
import { ShowsPage } from './pages/ShowsPage';

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

export const ContactUs = () => {
  return <ContactContainer />
}

export const Photos = () => {
  return <PhotoPageContainer />
}

export const Shows = () => {
  return <ShowsPage />
}