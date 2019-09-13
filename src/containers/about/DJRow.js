import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { DJBio } from '../components/about/DJBio';

export class DJRow extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper>
                        <DJBio dj={this.props.djs[0]} />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <DJBio dj={this.props.djs[1]} />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <DJBio dj={this.props.djs[2]} />
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}