import React from 'react'
import { Route, Routes } from 'react-router';
import RootLayOut from './pages/RootLayOut';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NotFound from './pages/NotFound';




const App = () => {

  const mino = 'hello ';

  
  return (
    <>
     
      <Routes>
        
        <Route path = '/' element = {<RootLayOut />}>

          <Route index element = {<HomePage />} />
          <Route path = 'about' element = {<About />} />
          <Route path = '*' element = {<NotFound />} />

        </Route>

      </Routes>
    </>
  )
}

export default App