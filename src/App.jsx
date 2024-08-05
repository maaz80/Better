import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Calculator from './components/Calculator'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
    </div>
  )
}

export default App
