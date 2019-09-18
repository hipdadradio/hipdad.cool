import React from 'react';

export class PhotoArchiveListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick({
            title: this.props.title,
            author: this.props.author,
            description: this.props.description,
            photos: this.props.photos
        });
    }

    render() {
        return (
            <div className="textContainer">
                <button onClick={this.handleClick}>
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.author} ({this.props.count} photos)</h4>
                    <img className="photoArchiveCoverImg" src={this.props.imgSrc} alt={this.props.title} />
                    <p>{this.props.description}</p>
                </button>
                <br />
            </div>
        );
    }
}

