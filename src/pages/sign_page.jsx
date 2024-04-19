import React from 'react'
import './sign_page.css'
import LoginPage from './login_page'
import { Link, useNavigate } from 'react-router-dom'

function SignPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="outer position-absolute end-0">
          <div className="inner position-absolute start-50 top-50 translate-middle"></div>
        </div>
        <div className="signin position-absolute start-0">
          <div className="signText position-absolute start-50 top-50 translate-middle">
            <h1>Create Your Account</h1>
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
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
              </div>
              <button type="submit" className="signupbtn btn btn-primary">Sign Up!</button>
            </form>
            <br />
            <Link to='../login' className="login-account navbar-brand ">Login to your account</Link>
          </div>
            
        </div>
      </div> 
    </>
  )
}

export default SignPage