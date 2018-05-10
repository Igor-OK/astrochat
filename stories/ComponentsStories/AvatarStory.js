import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '../../src/components/Avatar/Avatar';

export default storiesOf('Avatar', module)
  .add('Standart Avatar', () => ([
    <Avatar size = 'large'/>,
    <Avatar size = 'medium'/>,
    <Avatar size = 'small'/>,
  ]))
  .add('Checked Avatar', () => ([
    <Avatar size = 'large' checked = {true}/>
  ]))