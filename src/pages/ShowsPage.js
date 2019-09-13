import React from 'react';

import { ShowContainer } from '../containers/shows/ShowContainer';
import { ShowButton } from '../components/shows/ShowButton';
import { fetchShowsList, parseShows } from '../util/DBUtil';

export class ShowsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSelected: false,
            title: '',
            playlistId: '',
            showList: []
        };

        this.handleFetchedShows = this.handleFetchedShows.bind(this);
        this.showSelected = this.showSelected.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
    }

    handleFetchedShows(shows) {
        let showList = parseShows(shows);

        this.setState({ showList });
    }

    componentDidMount() {
        fetchShowsList(this.handleFetchedShows);
    }

    showSelected(title, playlistId) {
        this.setState({
            showSelected: true,
            title: title,
            playlistId: playlistId
        })
    }

    clearSelection() {
        this.setState({
            showSelected: false,
            title: '',
            playlistId: ''
        })
    }

    render() {
        let showContainer = null;

        if (this.state.showSelected) {
            showContainer = (<div hidden={!this.state.showSelected}>
                <ShowContainer backToShows={this.clearSelection} hidden={!this.showSelected} playlistId={this.state.playlistId} title={this.state.title} />
            </div>);
        }

        return (
            <>
                <div hidden={this.state.showSelected}>
                    {this.state.showList.map(show => (
                        <ShowButton handleClick={this.showSelected} key={show.title} title={show.title} imagesrc={show.imagesrc} desc={show.desc} playlistId={show.playlistId} />
                    ))}
                </div>
                {showContainer}
            </>
        );
    }
}