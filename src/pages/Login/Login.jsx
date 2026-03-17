import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png'

const Login = () => {
  const[signState, setSignState] = useState("Sign In")



  return (
    <div className='login'>
      <img src={logo} className='login__logo'  alt="" />
      <div className="login__form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? <input type="text" placeholder='Your Name' /> : <></>}
          
          <input type="email" placeholder='Email Only' />
          <input type="password" placeholder='Password' />
          <button>Sign Up</button>
          <div className="form__help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form__switch">
          <p>New to Netflix? <span>Sign Up Now</span></p>
          <p>Already Have Account? <span>Sign In Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
