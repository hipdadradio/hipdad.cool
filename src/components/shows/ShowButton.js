import React from 'react';

export class ShowButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.show);
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick} className="showButton">
                    <img className="showImageContainer" src={this.props.show.imagesrc} alt={this.props.show.title} />
                    {/* <h3>{this.props.show.title}</h3> */}
                    {/* <p className="textContainer">{this.props.show.desc}</p> */}
                </button>
                <br />
            </>
        );
    }
}