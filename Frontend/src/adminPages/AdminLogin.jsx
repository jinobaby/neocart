import React, { useState } from 'react'
import '../style/AdminLogin.css'
import { adminApi } from '../services/adminApi'
import { useDispatch } from 'react-redux';
import { AdminLoginFun } from '../redux/adminSlice'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

    var [loginData, setLoginData] = useState({
        adminEmail: '',
        adminPassword: ''
    })

    var dispatch = useDispatch()
    var navigate = useNavigate()

    function handleData(e) {
        var {name, value} = e.target;
        setLoginData(preview => ({
            ...preview,
            [name]: value
        }))
    }

    async function adminLogin() {
        var response = await adminApi(loginData)
        console.log("Response from adminLogin:", response);
        dispatch(AdminLoginFun(response.data))
        navigate('/Admin')
    }

    return (
        <div className='login-main'>
            <section className='main-login-form'>
                <label htmlFor="email">Email</label>
                <input
                    className='login-input'
                    type="email"
                    placeholder='Enter your Admin Email'
                    name='adminEmail'
                    onChange={handleData}
                />

                <label htmlFor="password">Password</label>
                <input
                    className='login-input'
                    type="password"
                    placeholder='Enter your Admin Password'
                    name='adminPassword'
                    onChange={handleData}
                />

                <button type='button' className='login-btn' onClick={adminLogin}>Admin Login</button>
            </section>

        </div>
    )
}

export default AdminLogin