import React from 'react';
import { storiesOf } from '@storybook/react';
import {HeaderBtn} from '../../src/components/HeaderBtn/HeaderBtn';

export default storiesOf('HeaderBtn', module)
.add('Standart HeaderBtn', () => ([
  <HeaderBtn txt='Back' type='back' />,
  <HeaderBtn txt='Action' type='action' />,
]));
