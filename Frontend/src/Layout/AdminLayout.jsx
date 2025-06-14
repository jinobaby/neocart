import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminFootbar from '../Components/AdminFootbar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
        
        <AdminNavbar/>

        <Outlet/>

        <AdminFootbar/>

    </div>
  )
}

export default AdminLayout