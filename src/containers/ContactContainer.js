import React from 'react';

import { MailingListFormContainer } from './MailingListFormContainer';
import { DJApplicationContainer } from './DJApplicationContainer';
import { ArtistApplicationContainer } from './ArtistApplicationContainer';

export class ContactContainer extends React.Component {
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