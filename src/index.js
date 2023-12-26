import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<React />, rootElement);
} else {
  render(<React />, rootElement);
}

reportWebVitals();
