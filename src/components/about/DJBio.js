import React from 'react';

export class DJBio extends React.Component {
    render() {
        const bioPhotoStyle = {
            maxHeight: '20vh',
            marginInline: '1em'
        };

        return (
            <div>
                <h3>{this.props.dj.name}</h3>
                <img src={this.props.dj.imgSrc} alt={this.props.dj.name + " Photo"} style={bioPhotoStyle} />
            </div>
        );
    }
}