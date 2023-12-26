import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
        <Router />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
  );
}


reportWebVitals();
