import React from 'react';

import { fetchHipDadDjs } from '../../util/DBUtil';
import { DJ } from '../../components/about/DJ';

export class DJContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            djs: []
        }

        this.handleFetchedDjs = this.handleFetchedDjs.bind(this);
    }

    handleFetchedDjs(djs) {
        this.setState({ djs });
    }

    componentDidMount() {
        fetchHipDadDjs(this.handleFetchedDjs);
    }

    render() {
        return (
            <div>
                <h3>Meet the DJs!</h3>
                <div className="djsContainer">
                    {this.state.djs.map(dj => (
                        <DJ name={dj.name} bio={dj.bio} image={dj.image} key={dj.name} />
                    ))}
                </div>
            </div>
        );
    }
}