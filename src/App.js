import './App.css';
import React from 'react';
import Home from './component/home';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
  
    </BrowserRouter>
  );
};

export default App;
