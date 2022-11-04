import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "../components/Header.jsx";

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet />
    <footer>div</footer>
  </>
  )
}

export default Layout