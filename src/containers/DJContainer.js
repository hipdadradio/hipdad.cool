import React from 'react';

import { fetchHipDadDjs, parseDjs } from '../util/DBUtil';
import { DJ } from '../components/DJ';

export class DJContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            djs: []
        }

        this.handleFetchedDjs = this.handleFetchedDjs.bind(this);
    }

    handleFetchedDjs(djs) {
        let parsedDjs = parseDjs(djs);

        this.setState({
            djs: parsedDjs
        });
    }

    componentDidMount() {
        fetchHipDadDjs(this.handleFetchedDjs);
    }

    render() {
        return (
            <div>
                <h3>Meet the DJs!</h3>
                {this.state.djs.map(dj => (
                    <DJ name={dj.name} bio={dj.bio} image={dj.image} key={dj.name} />
                ))}
            </div>
        );
    }
}