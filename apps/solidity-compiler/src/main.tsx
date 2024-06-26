// eslint-disable-next-line no-use-before-define
import React from 'react'
import { createRoot } from 'react-dom/client';

import App from './app/app'

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(<React.StrictMode>
    <App />
  </React.StrictMode>);
}
