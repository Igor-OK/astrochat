import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Footer } from '../../src/components/Footer/Footer';
import { MemoryRouter } from 'react-router-dom';


export default storiesOf('Footer', module)
  .add('Standart footer', () => (
    <MemoryRouter>
      <Footer />
    </MemoryRouter >
  ))