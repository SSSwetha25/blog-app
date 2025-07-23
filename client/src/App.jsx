import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/Blog'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Blog/>} />
      </Routes>
    </div>
  )
}

export default App