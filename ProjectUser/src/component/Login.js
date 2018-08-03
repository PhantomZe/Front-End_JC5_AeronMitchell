import React, { Component } from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


class Login extends Component
{
    // increment = () => {  
    //     this.props.dispatch({type:'INCREMENT'});
    //   }
      
    //   decrement = () => {  
    //     this.props.dispatch({type:'DECREMENT'});
    //   }
      
    //   klik = (apa) => {    
    //       this.props.dispatch({type:'KLIK', value: apa.nama.value, value2: apa.pass.value});    
    //      }
    state =
    {
        signinres:'',
        redirect:false,
        userid:'',
    }
    
    Login(obj)
    {
        var self=this;
        axios.post('http://localhost:3001/login',
        {
            Username:obj.Username.value,
            password:obj.password.value
        })
        .then(function(response)
        {
            self.setState({userid:response.data.userid});
            console.log(self.state.userid);
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
            if(self.state.userid>=1)    
            {
                self.setState({redirect:true})
                self.setState({userid:response.data.userid});
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
            return <Redirect to='/'/>
        }
        var color=
        {
            color:"black"
        }
        return(
        <div>
            <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-xs-4 col-sm-4 col-md-4 login">
                <div className="col-sm-12 col-md-12 row">
                    <div className="col-sm-12 col-md-12 isi">
                        <h1>Login</h1>
                    </div>
                    <div className="col-sm-12 col-md-12 isi">
                        <hr id="Menu"/>
                        <p className="Input">Username</p><input className="form-control" type="text" minLength='4' maxLength='20' ref='Username' required/>
                    </div>
                    <br/>
                    <div className="col-sm-12 col-md-12 isi">
                        <p className="Input">Password</p><input className="form-control" type="password" ref='password' minLength="4" maxLength="20" required/>
                    </div>
                    <br/>
                    <div className="col-sm-12 col-md-12 buton">
                        <hr id="Menu"/>
                        <span style={{color:'red'}}>{this.state.signinres}</span><br/>
                        <input type="submit" id="submit" onClick={() => this.Login(this.refs)} value="Login"/>
                    </div>
                    <div className="col-sm-12 col-md-12 isi">
                    <Link to="/"><button className="Button" value="Home" id="Home"><p className="tulisan">Home</p></button></Link>
                    </div>
                    <div className="col-sm-12 col-md-12 balik">
                        <p className="balisk">
                            Belum punya account ?
                        
                        <Link to="/Register"><span style={color}>Register</span></Link>
                    </p>
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
