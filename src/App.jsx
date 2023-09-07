import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';


function App() {

  return (
        <>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutUsPage/>}/>
          </Routes>
        </>
  )
}

export default App
