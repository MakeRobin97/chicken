import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Style from './styles/Style';
import Main from './pages/Main/Main';
import Start from './pages/Start/Start';
import Result from './pages/Result/Result';

const Router=()=> {
  return (
    <Style>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/start/:id" element={<Start />} />
            <Route path="/result" element={<Result />} />
          </Routes>
    </BrowserRouter>
    </Style>
  );
}

export default Router;
