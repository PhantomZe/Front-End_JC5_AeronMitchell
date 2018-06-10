import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Login extends Component
{
    render()
    {
        return(
            <div className="page-wrapper">
                <div className="page-content--bge5">
                    <div className="container">
                        <div className="login-wrap">
                            <div className="login-content">
                                <div className="login-logo">
                                    <a href="#">
                                        <Link to="/"><img src="images/icon/BB.jpg" alt="CoolAdmin"/></Link>
                                    </a>
                                </div>
                                <div className="login-form">
                                    <form action="" method="post">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input className="au-input au-input--full" type="email" name="email" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="au-input au-input--full" type="password" name="password" placeholder="Password"/>
                                        </div>
                                        <div className="login-checkbox">
                                            <label>
                                                <input type="checkbox" name="remember"/>Remember Me
                                            </label>
                                            <label>
                                                <a href="forget-pass.html">Forgotten Password?</a>
                                            </label>
                                        </div>
                                        <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;