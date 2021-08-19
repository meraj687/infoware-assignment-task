import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'
import { useState } from 'react'

function Login() {
  const history = useHistory()
  const [useremail, setUserEmail] = useState('')
  const [userpassword, setUserPassword] = useState('')
  const loginuser = (event) => {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(useremail, userpassword)
      .then((auth) => {
        history.push('/')
      })
      .catch((event) => alert(event.message))
  }
  return (
    <div className='login'>
      <Link>
        <img
          src='https://infoware.com/wp-content/uploads/Infoware-logo-plain-trans-Black.gif'
          alt='photo'
          className='login__logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form action=''>
          <h5>E-mail</h5>
          <input
            type='email'
            value={useremail}
            onChange={(event) => setUserEmail(event.target.value)}
            placeholder='Enter email'
          />
          <h5>Password</h5>
          <input
            value={userpassword}
            onChange={(event) => setUserPassword(event.target.value)}
            type='password'
            placeholder='Enter Password'
          />
          <button
            type='submit'
            onClick={loginuser}
            className='login__signinbutton'
          >
            Sign In
          </button>
        </form>
        <p>By signin in , you are agree to infoware term and condition</p>
        <Link to='/register'>
          <button type='submit' className='login__registerbutton'>
            Create Your Infoware Account
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Login
