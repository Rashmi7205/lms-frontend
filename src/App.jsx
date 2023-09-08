import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';


function App() {

  return (
        <>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutUsPage/>}/>
            <Route path='/signup' element={<Signup/>}/>

            <Route path='*' element={<NotFound/>}/>

          </Routes>
        </>
  )
}

export default App
