import React from 'react';

export class ShowButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.title, this.props.playlistId);
    }

    render() {
        return (
            <>
                <button className="showBox" onClick={this.handleClick}>
                    <h3>{this.props.title}</h3>
                    <img className="showImageContainer" src={this.props.imagesrc} alt={this.props.title} />
                    <p className="textContainer">{this.props.desc}</p>
                </button>
                <br />
            </>
        );
    }
}