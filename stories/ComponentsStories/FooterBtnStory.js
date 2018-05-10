import React from 'react';
import { storiesOf } from '@storybook/react';
import FooterBtn from '../../src/components/FooterBtn/FooterBtn';

export default storiesOf('FooterBtn', module)
.add('Standart FooterBtn', () => ([
  <FooterBtn icon='footer-chats' description='Chats'/>,
  <FooterBtn icon='footer-settings' description='Settings'/>,
  <FooterBtn icon='footer-contacts' description='Contacts'/>  
]));
