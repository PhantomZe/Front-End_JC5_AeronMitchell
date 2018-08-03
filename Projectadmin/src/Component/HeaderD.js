import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

class HeaderD extends Component
{
    render()
    {
        const cookies = new Cookies();
        console.log(cookies.get('Login'));
        // if(this.props.masuk == 0 )
        // {
        //     return <Redirect to='/Login'/>
        // }
        if(cookies.get('Login') == 0)
        {
            return <Redirect to='/Login'/>
        }
        return(
            <div>
                <header className="header-desktop">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <div className="header-wrap">
                                <form className="form-header" action="" method="POST">
                                    <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                    <button className="au-btn--submit" type="submit">
                                        <i className="zmdi zmdi-search"></i>
                                    </button>
                                </form>
                                <div className="header-button">
                                    <div className="account-wrap">
                                        <div className="account-item clearfix js-item-menu">
                                            <div className="dropdown" id="Drop">
                                            <div className="image">
                                                <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                            </div>
                                                <button className="btn  " data-toggle="dropdown">
                                                <h3 className="name">PhantomZero</h3> <div className="caret"></div>
                                                </button>
                                                    <ul className="dropdown-menu">
                                                    <li><Link to="/Login"><a href="#">SignOut</a></Link></li>
                                                    <li><Link to="/ForgotPass"><a href="#">ForgotPassWord</a></Link></li>
                                                    </ul>
                                            </div>
                                            {/* <div className="content">
                                                <a className="js-acc-btn" href="#">PhantomZero</a>
                                            </div>
                                            <div className="account-dropdown js-dropdown">
                                                <div className="info clearfix">
                                                    <div className="image">
                                                        <a href="#">
                                                            <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                        </a>
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="name">
                                                            <a href="#">PhantomZero</a>
                                                        </h5>
                                                        <span className="email">mitchellaeron14@gmail.com</span>
                                                    </div>
                                                </div>
                                                <div className="account-dropdown__body">
                                                </div>
                                                <div className="account-dropdown__footer">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-power"></i>Logout</a>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        masuk:state.userid
    };
  }
export default connect(mapStateToProps)(HeaderD)