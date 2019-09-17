import React from 'react';

export class NewsContainer extends React.Component {
    render() {
        return (
            <div className="growingContainer">
                <img src={this.props.image} className="newsImageContainer" alt={this.props.title + "_IMG"} />
                <div className="textContainer">
                    <h2>{this.props.title}</h2>
                    <h4>{this.props.date}</h4>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}