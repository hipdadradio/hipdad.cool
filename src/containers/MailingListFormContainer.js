import React from 'react';

const CORS_ROOT = 'https://cors-hipdadradio.herokuapp.com/';
const GOOGLE_FORM_EMAIL_ID = 'entry.1059772933';
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScIj6qyeZSeUX62cCstOZSuVTQIXMjR-ci7J9NSArSuoCWbVQ/formResponse';

export class MailingListFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            started: false,
            value: '',
        };

        this.startForm = this.startForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    startForm() {
        this.setState({ started: true });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();

        formData.append(GOOGLE_FORM_EMAIL_ID, this.state.value);

        const Http = new XMLHttpRequest();

        const url = CORS_ROOT + GOOGLE_FORM_ACTION_URL;

        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    alert("Success! We now have your email address and will sell it to anyone who wants to buy it.")
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
            value: ''
        });
        document.getElementById('mailingListEmail').value = '';
    }

    render() {
        return (
            <div className="TextContainer" >
                <h2>Join Our Mailing List!<button className="formButton" onClick={this.startForm} hidden={this.state.started}>Looking for more?</button></h2>
                <form onSubmit={this.handleSubmit} hidden={!this.state.started}>
                    <h4>Join our mailing list for updates on all things Hip Dad Radio!</h4>
                    <section>
                        <p>
                            <label htmlFor="mailingListEmail">
                                <span>Email: </span>
                            </label>
                            <input id="mailingListEmail" type="email" name="email" value={this.state.email} onChange={this.handleChange} /> <br />
                        </p>
                    </section>
                    <button id="MailingListSubmit" type='submit' hidden={!this.state.value}>Get Those Updates!</button>
                </form>
            </div>
        );
    }
}