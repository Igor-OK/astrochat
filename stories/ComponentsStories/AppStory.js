import React from 'react';
import { storiesOf } from '@storybook/react';
import { App } from '../../src/components/App/App';
import { MemoryRouter } from 'react-router-dom';


export default storiesOf('App', module)
  .add('App demo', () => (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ))