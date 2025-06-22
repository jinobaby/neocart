import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './adminPages/AdminLogin'
import AdminHome from './adminPages/AdminHome'
import AdminaddProduct from './adminPages/AdminaddProduct'
import AdminPrivate from './Components/AdminPrivate'
import UserPrivate from './Components/UserPrivate'
import AdminLayout from './Layout/AdminLayout'
import UserSignup from './UserPages/UserSignup'
import UserLogin from './UserPages/UserLogin'
import Home from './UserPages/home'
import Userlayout from './Layout/UserLayout'

function App() {

  return (
    <div>

      <Router>
        <Routes>
          {/* Admin Public Route */}
          <Route path='/Admin-login' element={<AdminLogin />} />

          {/* Admin Private route */}
          <Route element={<AdminPrivate> <AdminLayout /> </AdminPrivate>}>

            <Route element={<AdminHome />} path='/Admin' />
            <Route element={<AdminaddProduct />} path='/AdminaddProduct' />

          </Route>

          {/* User Public Login */}
          <Route path='/Signup' element={<UserSignup />} />
          <Route path='/Login' element={<UserLogin />} />

          {/* User Private */}
          <Route element={<UserPrivate> <Userlayout/> </UserPrivate>}>

          <Route element={<Home/>} path='/home'/>


          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App