import React from 'react';

import { NewsPage } from './pages/NewsPage';
import { HomePage } from './pages/HomePage';
import { PlayerPage } from './pages/PlayerPage';
import { ContactPage } from './pages/ContactPage';
import { PhotoPage } from './pages/PhotoPage';
import { ShowsPage } from './pages/ShowsPage';

// Home Page
export const Home = () => {
  return <HomePage />;
}

// News page
export const News = () => {
  return <NewsPage />;
}

export const Listen = () => {
  return <PlayerPage />;
}

export const ContactUs = () => {
  return <ContactPage />
}

export const Photos = () => {
  return <PhotoPage />
}

export const Shows = () => {
  return <ShowsPage />
}