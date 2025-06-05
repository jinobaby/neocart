import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './adminPages/AdminLogin'

function App() {
  return (
    <div>
      
      <Router>

        <Routes>

          <Route path='/Admin-login' element={<AdminLogin/>}/>

        </Routes>

      </Router>

    </div>
  )
}

export default App