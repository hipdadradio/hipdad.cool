import React from 'react';

const CORS_ROOT = 'https://cors-hipdadradio.herokuapp.com/';
const GOOGLE_FORM_FIRST_NAME_ID = 'entry.984192258';
const GOOGLE_FORM_LAST_NAME_ID = 'entry.327263638';
const GOOGLE_FORM_EMAIL_ID = 'entry.1665212900';
const GOOGLE_FORM_WHY_ID = 'entry.643621519';
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf-NgZa7cYLvzydCIHJLzMvSR5WrPG-08c9rm70aYZwh5R_dg/formResponse';

export class DJApplicationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            started: false,
            firstName: '',
            lastName: '',
            email: '',
            why: ''
        };

        this.startForm = this.startForm.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleWhyChange = this.handleWhyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    startForm() {
        this.setState({ started: true });
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleWhyChange(event) {
        this.setState({ why: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();

        formData.append(GOOGLE_FORM_FIRST_NAME_ID, this.state.firstName);
        formData.append(GOOGLE_FORM_LAST_NAME_ID, this.state.lastName);
        formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email);
        formData.append(GOOGLE_FORM_WHY_ID, this.state.why);

        const Http = new XMLHttpRequest();

        const url = CORS_ROOT + GOOGLE_FORM_ACTION_URL;

        Http.onload = function (e) {
            if (Http.readyState === 4) {
                if (Http.status === 200) {
                    alert("Success! We will reach out to you to see what DJ oportunities are available.")
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
            firstName: '',
            lastName: '',
            email: '',
            why: ''
        });
        document.getElementById('applicationFirstName').value = '';
        document.getElementById('applicationLastName').value = '';
        document.getElementById('applicationEmail').value = '';
        document.getElementById('applicationWhy').value = '';
    }

    render() {
        return (
            <div>
                <h2>Be a Hip Dad DJ!</h2>
                <button className="formButton" onClick={this.startForm} hidden={this.state.started}><h3>Tell us who you are</h3></button>
                <form className="textContainer" onSubmit={this.handleSubmit} hidden={!this.state.started}>
                    <h4>Want to be a Hip Dad Radio DJ? Tell us why!</h4>
                    <section>
                        <p>
                            <label htmlFor="applicationFirstName">
                                <span>First Name: </span>
                            </label>
                            <input id="applicationFirstName" name="firstName" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                        </p>
                        <p hidden={!this.state.firstName}>
                            <label htmlFor="applicationLastName">
                                <span>Last Name: </span>
                            </label>
                            <input id="applicationLastName" name="lastName" value={this.state.lastName} onChange={this.handleLastNameChange} />
                        </p>
                        <p hidden={!(this.state.lastName && this.state.firstName)}>
                            <label htmlFor="applicationEmail">
                                <span>Email: </span>
                            </label>
                            <input id="applicationEmail" type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
                        </p>
                        <p hidden={!(this.state.email && this.state.lastName && this.state.firstName)}>
                            <label htmlFor="applicationWhy">
                                <span>Why HDR: </span>
                            </label>
                            <input id="applicationWhy" name="why" value={this.state.why} onChange={this.handleWhyChange} />
                        </p>
                    </section>
                    <button id="SubmitButton" type='submit' hidden={!(this.state.why && this.state.email && this.state.lastName && this.state.firstName)}>Welcome, DJ {this.state.firstName}</button>
                </form>
            </div>
        );
    }
}