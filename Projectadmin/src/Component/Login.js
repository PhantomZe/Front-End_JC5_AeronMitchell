import React, { Component } from 'react';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';


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
            Email:obj.email.value,
            password:obj.password.value
        })
        .then(function(response)
        {
            self.setState({userid:response.data});
            if(self.state.userid>=1)    
            {
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
        if(this.state.redirect)
        {
            this.props.dispatch({type:'Login',userid:this.state.userid});
            const cookies = new Cookies();
            cookies.set('Login', this.state.userid, { path: '/' });
            return <Redirect to='/'/>
        }
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
                                            <input className="au-input au-input--full"ref='email' type="email" name="email" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="au-input au-input--full" type="password" ref='password' name="password" placeholder="Password"/>
                                        </div>
                                        <div className="login-checkbox">
                                            {this.state.signinres}
                                            <label>
                                                Forgot Password?
                                            </label>
                                        </div>
                                        <button onClick={() => this.Login(this.refs)} className="au-btn au-btn--block au-btn--green m-b-20" type="button">sign in</button>
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
function mapStateToProps(state){
    return {
        masuk:state.userid
    };
  }

export default connect(mapStateToProps)(Login)