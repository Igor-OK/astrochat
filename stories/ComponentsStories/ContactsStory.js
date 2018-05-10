import React from 'react';
import { storiesOf } from '@storybook/react';
import { Contacts } from '../../src/components/Contacts/Contacts';
import { MemoryRouter } from 'react-router-dom';

export default storiesOf('Contacts', module).add('Contacts list', () => (
  <MemoryRouter>
    <Contacts
      contacts={[
        {
          userName: 'Aaron A Aaronson',
          content: 'Some message',
          contentType: 'message',
          time: '9:30',
          size: 'medium',
          checked: true,
          count: 3,
          icon: 'message-read',
        },
        {
          userName: 'Aaron A Aaronson',
          content: 'online',
          contentType: 'online',
          size: 'medium',
        },
        {
          userName: 'Aaron A Aaronson',
          content: 'Some message',
          contentType: 'message',
          size: 'medium',
        },
      ]}
    />
  </MemoryRouter>
));
