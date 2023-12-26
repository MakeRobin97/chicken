import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Style from './styles/Style';
import Main from './pages/Main/Main';
import Start from './pages/Start/Start';
import Result from './pages/Result/Result';
import { HelmetProvider } from 'react-helmet-async';

const Router=()=> {
  return (
    <HelmetProvider>
    <Style>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/start" element={<Start />} />
            <Route path="/result" element={<Result />} />
          </Routes>
    </BrowserRouter>
    </Style>
    </HelmetProvider>
  );
}

export default Router;
