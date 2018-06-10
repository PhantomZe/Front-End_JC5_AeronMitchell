import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class HeaderM extends Component
{
    render()
    {
        return(
            <div>
                <header className="header-mobile d-block d-lg-none">
                    <div className="header-mobile__bar">
                        <div className="container-fluid">
                            <div className="header-mobile-inner">
                                <a className="logo" href="index.html">
                                    <Link to="/"><img src="images/icon/BB.jpg" className="logo" alt="CoolAdmin" /></Link>
                                </a>
                                <button className="hamburger hamburger--slider" type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar-mobile">
                        <div className="container-fluid ">
                            <ul className="navbar-mobile__list list-unstyled">
                                <li className="has-sub">
                                <Link to="/"><a href="#"><i className="fas fa-tachometer-alt"></i>Home</a></Link>
                                </li>
                                <li>
                                    <Link to="/Table">
                                    <a href="#">
                                        <i className="fas fa-table"></i>Table</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <aside className="menu-sidebar d-none d-lg-block">
                    <div className="logo">
                        <a href="#">
                        <Link to="/"><img src="images/icon/BB.jpg"  alt="Cool Admin" /></Link>
                        </a>
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="list-unstyled navbar__list">
                                <li className="active has-sub">
                                    <Link to="/"><a href="#"><i className="fas fa-tachometer-alt"></i>Home</a></Link>
                                </li>
                                <li>
                                    <Link to="/Table">
                                    <a href="#">
                                        <i className="fas fa-table"></i>Table</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        );
    }
}
export default HeaderM;