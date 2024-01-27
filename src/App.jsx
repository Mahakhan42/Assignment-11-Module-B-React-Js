import React from 'react'
import { Navbar } from './Components/Navbar'
import "./App.css"
import { Footer } from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Cake } from './Pages/Cake'
import { About } from './Pages/About'
import { Blog } from './Pages/Blog'
import { Contact } from './Pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cake' element={<Cake/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
