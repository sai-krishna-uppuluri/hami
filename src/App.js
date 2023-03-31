import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
// import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
