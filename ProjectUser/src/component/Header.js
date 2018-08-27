import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import logo from './img/logo.jpg'


class Header extends Component 
{
    render() 
    {
        return (
            <nav className="navbar-inverse">
                <div className="container-fluid" id="Atas">
                        <div className="navbar-header">
                            <a href="#" className="navbar-brand">
                            <Link to="/"><img src={logo} className="Logo"/></Link>
                            </a>
                        </div>
                <ul className="nav navbar-nav">
                <li><Link to="/"><a href="#">Home</a></Link></li>
                <li><Link to="/Profile"><a href="#">Profile</a></Link></li>
                <li><Link to="/Cart"><a href="#">Cart</a></Link></li>
                <li><Link to="/AllProduct"><a href="#">All Product</a></Link></li>
                {/* <li>
                    <div className="dropdown" id="Drop">
                        <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            Pilih Game <div className="caret"></div>
                        </button>
                            <ul className="dropdown-menu">
                            <li><Link to="/Action"><a href="#">Action</a></Link></li>
                            <li><Link to="/Simulation"><a href="#">Simulation</a></Link></li>
                            <li><Link to="/Horror"><a href="#">Horror</a></Link></li>
                            <li><Link to="/Fantasy"><a href="#">Fantasy</a></Link></li>
                            <li><Link to="/RPG"><a href="#">RPG</a></Link></li>
                            <li><Link to="/Survival"><a href="#">Survival</a></Link></li>
                            <li><Link to="/Sport"><a href="#">Sport</a></Link></li>
                            <li><Link to="/Strategy"><a href="#">Strategy</a></Link></li>
                            <li><Link to="/War"><a href="#">War</a></Link></li>
                            </ul>
                    </div>
                </li> */}
                </ul>
                    <div className="btn-group btn-group-lg navbar-right">
                    <button class="btn btn-primary navbar-btn"><Link to="/Register"><a href="#"> Register</a> </Link></button>
                    <button class="btn btn-primary navbar-btn"><Link to="/Login"><a href="#"> Login</a> </Link></button>
                    </div>
                </div>
            </nav>
        );
    }
} 

export default Header;