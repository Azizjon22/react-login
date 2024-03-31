import React from 'react'
import {FaLock, FaUser} from "react-icons/fa"
import './LogenForm.css'

const LogenForm = () => {
  return (
    <div className='wrapper'>
        <form action=''> 
        <h1>Login</h1>

        <div className='input-box'>
            <input type='text' placeholder='UserName' />
            <FaUser className='icon'/>
        </div>

        <div className='input-box'>
            <input type='password' placeholder='Password' />
            <FaLock className='icon'/>
        </div>

        <div className='remember-forgot'>
            <label><input type='checkbox'/>Remember me </label>
            <a href='#'> forgot password?</a>
        </div>

        <button type='submit'> 
        Login
        </button>

        <div className='register-link'>
            <p>Don't have an accaunt? <a href='#'>Register </a></p>
        </div>

        </form>
    </div>
  )
}

export default LogenForm