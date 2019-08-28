import React from 'react';

export class NewsContainer extends React.Component {
    render() {
        return (
            <div className="GrowingContainer">
                <img src={this.props.image} className="NewsImageContainer" alt={this.props.title + "_IMG"} />
                <div className="TextContainer">
                    <h2>{this.props.title}</h2>
                    <h4>{this.props.date}</h4>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}