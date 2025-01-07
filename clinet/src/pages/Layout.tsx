import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Filter from '../components/Filter'
import { Outlet } from 'react-router-dom'

const Layout = () => {
 
  
  return (
    <>
    <Header/>
    <NavBar/>
    <Filter/>
    <Outlet/>
    </>
  )
}

export default Layout