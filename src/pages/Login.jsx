import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setEmail, setPassword } from '../store/AccountSlice'

const Login = () => {
    const [emailText, setEmailText] = useState("")
    const [passwordText, setPasswordText] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitForm = () => {
        dispatch(setEmail(emailText))
        dispatch(setPassword(passwordText))
        navigate('/verify')
    }
    return (
        <>
            <div class="external_wrapper">
                <div class="container-fluid-" id="form_login">
                    <div class="logo_box">
                        <img src="assets/images/paypal_logo.svg" alt="" />
                    </div>

                    <div class="row m-0 ">
                        <div class="col-md-12">
                            <div class="form">
                                <form onSubmit={submitForm}>
                                    <div class="form-group">
                                        {/* <!--  <label for="">Email Address</label> --> */}
                                        <input type="text" class="form-control" placeholder="Email or mobile number" name="email" id="exampleInputEmail1" required value={emailText} onChange={e => setEmailText(e.target.value)}
                                            aria-describedby="emailHelp" />

                                    </div>
                                    <div class="form-group">
                                        {/* <!-- <label for="">Password</label> --> */}
                                        <input type="password" class="form-control" placeholder="Password" name="password" id="exampleInputPassword1" required value={passwordText} onChange={e => setPasswordText(e.target.value)}/>
                                    </div>
                                    <div class="forget_pass">
                                        <a href="#">Forgotten password?</a>
                                    </div>
                                    <div class="form-group">

                                        <button type="submit" id="cointiue_btn" class="btn btn-primary">Log In</button>

                                    </div>
                                    <div class="or_line">or</div>

                                    <div class="sign_up">
                                        <a href="#">Sign Up</a>
                                    </div>

                                </form>
                            </div>

                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}

export default Login