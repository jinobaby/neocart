import React from 'react'
import '../style/adminNavbar.css'
import { Link } from 'react-router-dom'
import { AdminLogoutFun } from '../redux/adminSlice'
import { useDispatch } from 'react-redux'

function AdminNavbar() {
  var dispatch = useDispatch()

  function handleAdminLogout() {
    dispatch(AdminLogoutFun())
  }
  return (
    <div className='admin-navbar-main'>
      <Link to={'/Admin'}>Home</Link>
      <p>Add Product</p>
      <p>View Product</p>
      <p>All Users</p>
      <Link to={'/AdminaddProduct'}>Admin Add Product</Link>
      <button onClick={handleAdminLogout}>Logout</button>
    </div>
  )
}

export default AdminNavbar