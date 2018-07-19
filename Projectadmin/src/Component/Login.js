import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';


class Login extends Component
{
    state =
    {
        signinres:'',
        redirect:false,
        userid:''
    }
    Login(obj)
    {
        var self=this;
        axios.post('http://localhost:3001/LoginAdmin',
        {
            Email:obj.Username.value,
            password:obj.password.value
        })
        .then(function(response)
        {
            console.log(response.data);
            console.log(response.data.userid);
            var D=response.data.userid;
            // if(response.data.userid>=1)
            // {
            //     self.setState({signinres:'Login Berhasil'})
            //     self.setState({redirect:true})
            //     self.setState({userid:response.data.userid})
                
            // }
            // else
            // {
            //     self.setState({signinres:'Terjadi Kesalahan pada Username / Password'})
            // }
            if(D == 1)
            {
                self.setState({signinres:'Login Berhasil'}),
                self.setState({redirect:true})
            }
            else
            {
                self.setState({signinres:'Login Gagal'})
            }
        })
    }
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
                                                <a href="forget-pass.html">Forgotten Password?</a>
                                            </label>
                                        </div>
                                        <button onClick={() => this.Login(this.refs)} className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
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