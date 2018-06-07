import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';



class Register extends Component
{
    render()
    {
        var color=
        {
            color:"black"
        }
        return(
            <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-xs-4 col-sm-4 col-md-4 Register">
                <div className="col-sm-12 col-md-12 row">
                    <div className="col-sm-12 col-md-12 isi">
                        <h1>Register</h1>
                        <hr id="Menu"/>
                    </div>
                    <div className="col-sm-12 col-md-12 isi">
                        <p className="Input">Nama</p><input type="text" minlength="5" maxlength="10" required id="nama"/>
                    </div>
                    <br/>
                    <div className="col-sm-12 col-md-12 isi">
                        <p className="Input">Password</p><input type="password" minlength="8" maxlength="15" required id="Password"/>
                    </div>
                    <br/>
                    <div className="col-sm-12 col-md-12 isi">
                        <p className="Input">E-mail</p><input type="email" id="E-mail" required/>
                    </div>
                    <br/>
                    <div className="col-sm-12 col-md-12 buton">
                        <hr id="Menu"/>
                        <input type="submit" id="submit" value="Submit"/>
                    </div>
                    <div className="col-sm-12 col-md-12 balik">
                    <Link to="/"><a href="#"><button className="Button" value="Home" id="Home"><p className="tulisan">Home</p></button></a></Link>
                    </div>
                    <div className="col-sm-12 col-md-12 balik">
                        <p className="balisk">
                            Sudah punya account ?
                        <Link to="/Login"><a href="#"><span style={color}>Login</span></a></Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;