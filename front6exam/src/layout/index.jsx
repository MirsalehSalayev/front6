import React from 'react'
import Navbar from '../sections/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../sections/footer'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout