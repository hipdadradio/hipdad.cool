import React from 'react';

import { ShowContainer } from '../containers/shows/ShowContainer';
import { ShowButton } from '../components/shows/ShowButton';
import { fetchShowsList } from '../util/DBUtil';
import { scrollToTop } from '../util/AppUtil';

export class ShowsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSelected: false,
            show: {},
            showList: []
        };

        this.handleFetchedShows = this.handleFetchedShows.bind(this);
        this.showSelected = this.showSelected.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
    }

    handleFetchedShows(showList) {
        this.setState({ showList });
    }

    componentDidMount() {
        fetchShowsList(this.handleFetchedShows);
    }

    showSelected(show) {
        scrollToTop();
        this.setState({
            showSelected: true,
            show: show,
        });
    }

    clearSelection() {
        this.setState({
            showSelected: false,
            show: {}
        });
    }

    render() {
        let showButtons = null;
        let showContainer = null;

        if (this.state.showSelected) {
            showContainer = (<div hidden={!this.state.showSelected}>
                <ShowContainer backToShows={this.clearSelection} hidden={!this.showSelected} show={this.state.show} />
            </div>);
        } else {
            showButtons = (<div className="showButtonsContainer">
                {this.state.showList.map(show => (
                    <ShowButton handleClick={this.showSelected} key={show.title} show={show} />
                ))}
            </div>);
        }

        return (
            <>
                <h2>Hip Dad Shows</h2>
                <div className="showsContainer">
                    {showButtons}
                    {showContainer}
                </div>
            </>
        );
    }
}