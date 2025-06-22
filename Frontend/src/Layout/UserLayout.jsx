import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNav from '../Components/UserNav'
import Footer from '../Components/Footer'

function Userlayout() {
  return (
    <div>
        
        <UserNav/>

        <Outlet/>

        <Footer/>

    </div>
  )
}

export default Userlayout