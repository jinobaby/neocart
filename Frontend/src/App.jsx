import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './adminPages/AdminLogin'
import { useSelector } from 'react-redux'
import AdminHome from './adminPages/AdminHome'
import AdminaddProduct from './adminPages/AdminaddProduct'

function App() {

  var adminLoginInfo = useSelector((state) => state.AdminLogin?.AdminLoginData[0])
  console.log("from app.jsx", adminLoginInfo);
  if (adminLoginInfo) {
    var Token = adminLoginInfo.Token
    console.log(Token);
    
  }
  return (
    <div>

      <Router>

        <Routes>

          <Route path='/Admin-login' element={<AdminLogin />} />
          <Route path='/Admin' element={Token ? <AdminHome /> : <AdminLogin />} />
          <Route path='/AdminaddProduct' element={Token ? <AdminaddProduct/> : <AdminLogin/>} />

        </Routes>

      </Router>

    </div>
  )
}

export default App