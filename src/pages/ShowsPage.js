import React from 'react';

import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { HdrNewshour, HotSandwich, HipDadAds } from '../AppRouter';

export class ShowsPage extends React.Component {
    render() {
        return (
            <>
                <div className="textContainer">
                    <button>
                        <h3>HDR Newshour</h3>
                        <img className="NewsImageContainer" src="https://bestlegalpractices.com/wp-content/uploads/2012/05/internet_lawyer-1.jpeg" alt="HDR_NEWSHOUR_IMG" />
                    </button>
                </div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <NavLink to="/shows/hdrnewshour/" exact activeClassName="active">HDR Newshour</NavLink>
                                <NavLink to="/shows/hotsandwich/" exact activeClassName="active">Hot Sandwich</NavLink>
                                <NavLink to="/shows/hipdadads/" exact activeClassName="active">Hip Dad Ads</NavLink>
                            </ul>
                        </nav>
                        <Switch className="primary-content">
                            <Route path="/shows/hdrnewshour/" component={HdrNewshour} />
                            <Route path="/shows/hotsandwich/" component={HotSandwich} />
                            <Route path="/shows/hipdadads/" component={HipDadAds} />
                        </Switch>
                    </div>
                </Router >
            </>
        );
    }
}