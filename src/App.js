import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SingleMovie from './SingleMovie'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App