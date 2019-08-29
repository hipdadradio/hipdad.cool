import React from 'react';

const CORS_ROOT = 'https://cors-hipdadradio.herokuapp.com/';
const GOOGLE_FORM_BAND_NAME_ID = 'entry.267308415';
const GOOGLE_FORM_NAME_ID = 'entry.1428062257';
const GOOGLE_FORM_EMAIL_ID = 'entry.2009621913';
const GOOGLE_FORM_WEBSITE_ID = 'entry.1224946671';
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfkAY3wK8ORxS4DS2XUu5ch5Xpu6UljrBcuzWVkOW76OWXvyg/formResponse';

export class ArtistApplicationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            started: false,
            bandName: '',
            name: '',
            email: '',
            website: ''
        };

        this.startForm = this.startForm.bind(this);
        this.handleBandNameChange = this.handleBandNameChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    startForm() {
        this.setState({ started: true });
    }

    handleBandNameChange(event) {
        this.setState({ bandName: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleWebsiteChange(event) {
        this.setState({ website: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();

        formData.append(GOOGLE_FORM_BAND_NAME_ID, this.state.bandName);
        formData.append(GOOGLE_FORM_NAME_ID, this.state.name);
        formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email);
        formData.append(GOOGLE_FORM_WEBSITE_ID, this.state.website);

        const Http = new XMLHttpRequest();

        const url = CORS_ROOT + GOOGLE_FORM_ACTION_URL;

        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    alert("Success! We will reach out to you to see what we can make happen!")
                } else {
                    alert("Sorry! Something went wrong... Please try to submit the form again.");
                }
            }
        };

        // Code to execute the http request
        Http.open("POST", url, true);
        Http.send(formData);
        this.setState({
            started: false,
            bandName: '',
            name: '',
            email: '',
            website: ''
        });
        document.getElementById('artistBandName').value = '';
        document.getElementById('artistName').value = '';
        document.getElementById('artistEmail').value = '';
        document.getElementById('artistWebsite').value = '';
    }

    render() {
        return (
            <div className="textContainer" >
                <h2>Do a Live Session on Hip Dad Radio! <button className="formButton" onClick={this.startForm} hidden={this.state.started}>Tell us about your Band</button></h2>
                <form onSubmit={this.handleSubmit} hidden={!this.state.started}>
                    <h4>Are you a muscian and want to perform LIVE on Hip Dad Radio? We'd love to have you on!</h4>
                    <section>
                        <p>
                            <label htmlFor="artistBandName">
                                <span>Band Name: </span>
                            </label>
                            <input id="artistBandName" name="bandName" value={this.state.bandName} onChange={this.handleBandNameChange} />
                        </p>
                        <p hidden={!this.state.bandName}>
                            <label htmlFor="artistName">
                                <span>Your Name: </span>
                            </label>
                            <input id="artistName" name="name" value={this.state.name} onChange={this.handleNameChange} />
                        </p>
                        <p hidden={!(this.state.name && this.state.bandName)}>
                            <label htmlFor="artistEmail">
                                <span>Email: </span>
                            </label>
                            <input id="artistEmail" name="email" type="email" value={this.state.email} onChange={this.handleEmailChange} />
                        </p>
                        <p hidden={!(this.state.email && this.state.name && this.state.bandName)}>
                            <label htmlFor="artistWebsite">
                                <span>Bandcamp: </span>
                            </label>
                            <input id="artistWebsite" name="website" value={this.state.website} onChange={this.handleWebsiteChange} />
                        </p>
                    </section>
                    <button id="SubmitButton" type='submit' hidden={!(this.state.website && this.state.email && this.state.name && this.state.bandName)}>Get {this.state.bandName} on HDR!</button>
                </form>
            </div>
        );
    }
}