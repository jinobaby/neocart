import React from 'react'
import '../style/adminNavbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearUserLogin } from '../redux/userSlice'

function UserNav() {
  var dispatch = useDispatch()
  var navigate = useNavigate()

  function handleUserLogout() {
    dispatch(clearUserLogin())
    navigate('/Admin-login')
  }
  return (
    <div className='admin-navbar-main'>
      <Link to={'/home'}>Home</Link>
      <Link to={'/cart'}>Cart</Link>
      <button onClick={handleUserLogout}>Logout</button>
    </div>
  )
}

export default UserNav