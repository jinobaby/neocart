import React from 'react'
import { useState } from 'react'
import { userLoginApi } from '../services/userApi'
import { useDispatch } from 'react-redux'
import { userLoginData } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

function UserLogin() {

    var dispatch = useDispatch()
    var navigate = useNavigate()

    var [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    function HandleData(e) {
        var { name, value } = e.target
        setLoginData((preview) => ({
            ...preview,
            [name]: value
        }))
    }

    async function HandleLoginSubmit() {
        var response = await userLoginApi(loginData)
        dispatch(userLoginData(response.data))
        navigate('/home')
    }

    return (
        <div className='login-main'>
            <section className='main-login-form'>

                <label htmlFor="email">Email</label>
                <input
                    className='login-input'
                    type="email"
                    placeholder='Enter your email'
                    name='email'
                    onChange={HandleData}
                />

                <label htmlFor="password">Password</label>
                <input
                    className='login-input'
                    type="password"
                    placeholder='Enter your password'
                    name='password'
                    onChange={HandleData}
                />

                <button type='button' onClick={HandleLoginSubmit} className='login-btn'>Signup</button>
            </section>

        </div>
    )
}

export default UserLogin