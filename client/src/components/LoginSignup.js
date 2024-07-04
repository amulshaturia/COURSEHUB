import React from 'react';
import axios from 'axios';
import './css/LoginSignup.css';
import { GoogleLogin } from '@react-oauth/google';
import {useNavigate , Link} from 'react-router-dom'

export default function LoginSignup() {
    const navigate = useNavigate(); 

    const onSuccess = async(credentialResponse)=>{
        try{
            const res = await axios.post('http://localhost:8000/auth/google' , {googleToken : credentialResponse.credential}); 
            localStorage.setItem('JWT-token' , res['data'].token) ; 
            navigate('/Profile'); 
        }catch(err){
            console.log('error : ' , err); 
        }
    }
    return (
        <div>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div style={{ paddingLeft: "4px" }}><h2>Welcome</h2></div>
                                <br></br>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="/forgotPassword" className="text-body">Forgot password?</Link>
                                    {/* <a href="#!" className="text-body">Forgot password?</a> */}
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg AmulLogin" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>

                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                    </div>

                                    <GoogleLogin
                                        onSuccess={(credentialResponse) => {
                                            onSuccess(credentialResponse); 
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    />

                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        className="link-danger">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="AmulFooter d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5">

                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>

                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>f
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>T
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>G
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>Ln
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
