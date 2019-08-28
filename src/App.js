import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Index, About, HdrNewshour, HotSandwich, HipDadAds, Player, ContactUs } from './AppRouter';
import { Logo } from './components/Logo';
import { PlatformLinkContainer } from './containers/PlatformLinkContainer';

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
            <NavLink to="/player/" exact activeClassName="active">Player</NavLink>
            <NavLink to="/hdrnewshour/" exact activeClassName="active">HDR Newshour</NavLink>
            <NavLink to="/hotsandwich/" exact activeClassName="active">Hot Sandwich</NavLink>
            <NavLink to="/hipdadads/" exact activeClassName="active">Hip Dad Ads</NavLink>
            <NavLink to="/contact/" exact activeClassName="active">Contact Us</NavLink>
          </ul>
        </nav>
        <Switch className="primary-content">
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/player/" component={Player} />
          <Route path="/hdrnewshour/" component={HdrNewshour} />
          <Route path="/hotsandwich/" component={HotSandwich} />
          <Route path="/hipdadads/" component={HipDadAds} />
          <Route path="/contact/" component={ContactUs} />
        </Switch>
        <footer>
          <PlatformLinkContainer />
        </footer>
      </div>
    </Router>
  );
}

export default App;