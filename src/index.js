import React from 'react';
import { render, hydrate } from 'react-dom';
import Router from 'Router';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
        <Router />,
    rootElement
  );
} else {
  render(
        <Router />,
    rootElement
  );
}
