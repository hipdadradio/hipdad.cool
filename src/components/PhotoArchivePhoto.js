import React from 'react';

export class PhotoArchivePhoto extends React.Component {
    render() {
        return (
            <div className="imageArchiveContainer">
                <img className="photoArchiveImg" src={this.props.imgSrc} alt={this.props.imgSrc} />
                <p>{this.props.desc}</p>
                <br />
            </div>
        );
    }
}