import { useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'



function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'Component={Home} />
    </Routes>
<Fotter/>
    </BrowserRouter>

    </>
  )
}

export default App
