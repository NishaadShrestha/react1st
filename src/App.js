import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router';
import About from './pages/About';

const App = () => {

  const mino = 'hello ';

  
  return (
    <>
      <Header/>
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route path = 'about' element = {<About />} />
      </Routes>
    </>
  )
}

export default App