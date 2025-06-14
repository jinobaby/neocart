import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './adminPages/AdminLogin'
import AdminHome from './adminPages/AdminHome'
import AdminaddProduct from './adminPages/AdminaddProduct'
import AdminPrivate from './Components/AdminPrivate'
import AdminLayout from './Layout/AdminLayout'

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



        </Routes>
      </Router>

    </div>
  )
}

export default App