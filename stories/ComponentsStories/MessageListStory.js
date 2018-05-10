import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MessagesList } from '../../src/components/MessagesList/MessagesList';


export default storiesOf('MessagesList', module)
  .add('Standart header', () => (
    <MessagesList
        messages={[
          {
            isMy: false,
            text: 'Здарова, бандиты',
            status: 'read',
            time: Date.now()
          },
          {
            isMy: true,
            text: 'И тебе здарова',
            status: 'sent',
            time: Date.now()
          },
          {
            isMy: true,
            text: 'И тебе здарова',
            status: 'read',
            time: Date.now()
          }
        ]}
      />
  ))