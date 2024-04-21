import { useState } from 'react';
import {BrowserRouter , Routes} from 'react-router-dom';


import './App.css'
import Homepage from './Components/Homepage/Homepage';

import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container1/Container';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Homepage/>
    <Container/>
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
