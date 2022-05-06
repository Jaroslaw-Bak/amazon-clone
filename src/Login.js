import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <Link to='/'>
            <img
                className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' 
            />
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' />

                <h5>Password</h5>
                <input type='password' />

                <button className='login__signInButton'>Sign In</button>
            </form>

            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>

            <button className='login__registerButton'>Create account</button>
        </div>

    </div>
  )
}

export default Login