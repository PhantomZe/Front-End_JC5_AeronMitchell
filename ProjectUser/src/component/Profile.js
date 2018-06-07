import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Data1 from './DataProf/Data1';
import Data2 from './DataProf/Data2';
import Data3 from './DataProf/Data3';


import FotoUser from './img/Foto.jpg'



class Profile extends Component
{
    
    render()
    {
        
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 Prof">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="col-xs-4 col-sm-4 col-md-4">
                        <img src={FotoUser} className="Fotoid img-thumbnail"/>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8">
                        <div className="panel-group" id="lin_Accor">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title" data-target="#panel-1"
                                    data-toggle="collapse"
                                    data-parent="#lin_Accor">Profile</h3>
                                </div>
                                <div className="panel-body">
                                    <h4>Nama: ...</h4>
                                    <hr/>
                                    <h4>Email: ...</h4>
                                    <hr/>
                                    <h4>Tgl Lahir: thn... bulan... tanggal...</h4>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="col-xs-12 col-sm-12-col-md-12 row" id="Prof">
                    <div className="panel-group" id="lin_Accor">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title" data-target="#panel-1"
                                data-toggle="collapse"
                                data-parent="#lin_Accor">Edit Profile</h3>
                            </div>
                            <div className="panel-body">
                                <ul className="nav nav-pills nav-justified">
                                    <li className="nav-item" id="data1" onClick={this.PDTA}><Link to="/Profile/"><a href="#"><h5 className="nav-link">DataA</h5></a></Link></li>
                                    <li className="nav-item" id="data2" onClick={this.PDTB}><Link to="/Profile/DataB"><a href="#"><h5 className="nav-link">DataB</h5></a></Link></li>
                                    <li className="nav-item" id="data3" onClick={this.PDTC}><Link to="/Profile/DataC"><a href="#"><h5 className="nav-link">DataC</h5></a></Link></li>
                                </ul>
                                <Route exact path="/Profile/" component={Data1}/>
                                <Route path="/Profile/DataB" component={Data2}/>
                                <Route path="/Profile/DataC" component={Data3}/>
                                <hr/>
                                <input type="submit" id="submit" value="Change"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12-col-md-12 row" id="Prof">
                        <div className="panel-group" id="lin_Accor">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title" data-target="#panel-1"
                                    data-toggle="collapse"
                                    data-parent="#lin_Accor">Invoice</h3>
                                </div>
                                <div className="panel-body" id="ResTab">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>
                                                    No
                                                </th>
                                                <th>
                                                    Transaction
                                                </th>
                                                <th>
                                                    Harga
                                                </th>
                                                <th>
                                                    Tanggal
                                                </th>
                                                <th>
                                                    Detail
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1.
                                                </td>
                                                <td>
                                                    #1
                                                </td>
                                                <td>
                                                    Rp.200.000,00
                                                </td>
                                                <td>
                                                    28/4/2018
                                                </td>
                                                <td>
                                                    <a href="#"><Link to='/Invoice1'><button className="btn btn-primary">Details</button></Link></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}
export default Profile;