import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';



class Login extends Component
{
    render()
    {
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
                        <p className="Input">E-mail</p><input type="email" required/>
                    </div>
                    <br/>
                    <div className="col-sm-12 col-md-12 isi">
                        <p className="Input">Password</p><input type="password" minlength="8" maxlength="15" required/>
                    </div>
                    <br/>
                    <div className="col-sm-12 col-md-12 buton">
                        <hr id="Menu"/>
                        <input type="submit" id="submit" value="Login"/>
                    </div>
                    <div className="col-sm-12 col-md-12 isi">
                        <Link to="/"><a href="#"><button className="Button" value="Home" id="Home"><p className="tulisan">Home</p></button></a></Link>
                    </div>
                    <div className="col-sm-12 col-md-12 balik">
                        <p className="balisk">
                            Belum punya account ?
                        
                        <Link to="/Register"><a href="#"><span style={color}>Register</span></a></Link>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;