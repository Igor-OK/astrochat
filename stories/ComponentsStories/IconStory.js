import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../../src/components/Icon/Icon';

export default storiesOf('Icon', module)
  .add('Standart Icon', () => (
    <div className = "icon-story">
      <Icon type = 'message-read'/>
      <Icon type = 'message-sent'/>
      <Icon type = 'header-add'/>
      <Icon type = 'header-write'/>
      <Icon type = 'footer-chats'/>
      <Icon type = 'footer-contacts'/>
      <Icon type = 'footer-settings'/>
    </div>
  ))