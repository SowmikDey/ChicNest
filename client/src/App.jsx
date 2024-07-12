import {React, useState } from 'react'
// import './App.css'
import Tech from './pages/Tech';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
   <>
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/tech' element={<Tech/>}></Route>

    </Routes>
   </Router>

   </>
  )
}

export default App
