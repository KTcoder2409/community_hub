import './landing_page.css'
import { useState } from 'react' 
import SignPage from './sign_page'
import LoginPage from './login_page'
import { Link, useNavigate } from 'react-router-dom'

function LandingPage(){
    const navigate = useNavigate();

    return(
        <>
            <nav className="navbar navbar-light bg-light p-0">
                <div className="container-fluid">
                    <a className="navbar-brand pt-2" href="#"><p className="navbar_text px-5">CSI</p></a>
                    <form className="d-flex px-5">
                        <button className="btn btn-outline-success" type="submit" onClick={() => {navigate("/login")}}>Login / Sign Up</button>
                    </form>
                </div>
            </nav>

            <div className="circle position-absolute top-50 start-50 translate-middle"></div>

            <div className="arrow position-absolute bottom-0 end-0">
                <Link to= '/sign' className="navbar-brand d-flex px-5" ><p className='arrow_text'>Get Started &#x2192;</p></Link>
            </div>
        </>
    )
}

export default LandingPage