import React from 'react';

export class DJ extends React.Component {
    render() {
        return (
            <div className="dj">
                <img src={this.props.image} className="djImageContainer" alt={this.props.name + "_IMG"} />
                <div className="djContainer">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.bio}</p>
                </div>
            </div>
        );
    }
}