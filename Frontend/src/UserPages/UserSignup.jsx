import React from 'react'
import { useState } from 'react'
import { userSignupApi } from '../services/userApi'

function UserSignup() {

    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
    })

    function HandleData(e) {
        var { name, value } = e.target;
        setUserData((preview) => ({
            ...preview,
            [name]: value
        }))
    }

    function Signup() {
        userSignupApi(userData)
    }

    return (
        <div className='login-main'>
            <section className='main-login-form'>

                <label htmlFor="name">Name</label>
                <input
                    className='login-input'
                    type="name"
                    placeholder='Enter your name'
                    name='name'
                    onChange={HandleData}
                />

                <label htmlFor="phone">Phone</label>
                <input
                    className='login-input'
                    type="number"
                    placeholder='Enter your number'
                    name='phone'
                    onChange={HandleData}
                />

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

                <button type='button' onClick={Signup} className='login-btn'>Signup</button>
            </section>

        </div>
    )
}

export default UserSignup