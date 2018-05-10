import { configure } from '@storybook/react';
import '../src/index.css'
function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);