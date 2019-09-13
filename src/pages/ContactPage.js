import React from 'react';

import { MailingListFormContainer } from '../containers/contact/MailingListFormContainer';
import { DJApplicationContainer } from '../containers/contact/DJApplicationContainer';
import { ArtistApplicationContainer } from '../containers/contact/ArtistApplicationContainer';

export class ContactPage extends React.Component {
    render() {
        return (
            <>
                <MailingListFormContainer />
                <DJApplicationContainer />
                <ArtistApplicationContainer />
            </>
        );
    }
}