import React from 'react'
import './login_page.css'
import SignPage from './sign_page'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="outerlogin position-absolute start-0">
          <div className="innerlogin position-absolute start-50 top-50 translate-middle"></div>
        </div>
        <div className="login position-absolute end-0">
          <div className="logText position-absolute start-50 top-50 translate-middle">
            <h1>Login to your Account</h1>
            <p>See a new world of ideas and visions unfold</p>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="mail@abc.com" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="••••••••••••" />
              </div>
              <div className="mb-3 form-check">
                <div className='forget-password position-absolute end-0'><Link to='' className='navbar-brand'>Forgot Password?</Link></div>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                
              </div>
              
              <button type="submit" className="loginbtn btn btn-primary">Login!</button>
            </form>
            <br />
            <p className='not-reg'>Not Registered Yet? <Link to='../sign' className="create-account navbar-brand ">Create an Account</Link></p>
          </div>
            
        </div>
      </div> 
    </>
  )
}

export default LoginPage