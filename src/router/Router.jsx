import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from '../layout/Layout.jsx'
import Home from '../pages/Home.js'
import About from '..//pages/About.js'
import Contact from '../pages/Contact.jsx'
import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="/contact"  element={<Contact />} />
       
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Router