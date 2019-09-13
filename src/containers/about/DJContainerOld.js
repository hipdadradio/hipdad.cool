import React from 'react';
import Grid from '@material-ui/core/Grid';
import { DJRow } from './DJRow';
import djData from '../data/DJData.json';

export class DJContainer extends React.Component {
    render() {
        const gridStyle= {
            marginInline: '20%',
        };
    
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid style={gridStyle} container item xs={12} spacing={5}>
                        <DJRow djs={[djData[0],djData[1],djData[2]]} />
                    </Grid>
                    <Grid style={gridStyle} container item xs={12} spacing={5}>
                        <DJRow djs={[djData[3],djData[4],djData[5]]}/>
                    </Grid>
                    <Grid style={gridStyle} container item xs={12} spacing={5}>
                        <DJRow djs={[djData[6],djData[7],djData[8]]}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}