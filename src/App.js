import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Index, About, HdrNewshour, HotSandwich, HipDadAds, Listen, ContactUs, Photos } from './AppRouter';
import { Logo } from './components/Logo';
import { PlatformLinkContainer } from './containers/PlatformLinkContainer';
import { Dropdown } from './components/Dropdown';

const showsList = [
  {
    id: 0,
    title: 'HDR Newshour',
    selected: false,
    jsx: <NavLink to="/hdrnewshour/" exact activeClassName="active">HDR Newshour</NavLink>
  },
  {
    id: 1,
    title: 'Hot Sandwich',
    selected: false,
    jsx: <NavLink to="/hotsandwich/" exact activeClassName="active">Hot Sandwich</NavLink>
  },
  {
    id: 2,
    title: "Hip Dad Ads",
    selected: false,
    jsx: <NavLink to="/hipdadads/" exact activeClassName="active">Hip Dad Ads</NavLink>
  }
]

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <Logo />
          <h1>Welcome to Hip Dad Radio!!</h1>
          <Logo />
        </header>
        <nav>
          <ul>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/about/" exact activeClassName="active">About</NavLink>
            <NavLink to="/listen/" exact activeClassName="active">Listen</NavLink>
            <NavLink to="/contact/" exact activeClassName="active">Contact Us</NavLink>
            <NavLink to="/photos/" exact activeClassName="actibe">Photos</NavLink>
            <Dropdown title="Shows" list={showsList} />
          </ul>
        </nav>
        <Switch className="primary-content">
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/listen/" component={Listen} />
          <Route path="/hdrnewshour/" component={HdrNewshour} />
          <Route path="/hotsandwich/" component={HotSandwich} />
          <Route path="/hipdadads/" component={HipDadAds} />
          <Route path="/contact/" component={ContactUs} />
          <Route path="/photos/" component={Photos} />
        </Switch>
        <footer>
          <PlatformLinkContainer />
        </footer>
      </div>
    </Router>
  );
}

export default App;