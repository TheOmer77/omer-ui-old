import React from 'react';
import { createRoot } from 'react-dom/client';
import DemoApp from './DemoApp';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>
);
