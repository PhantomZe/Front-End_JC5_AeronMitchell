import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';


import Act1 from './img/Fallout.jpg';
import Sim1 from './img/2.jpg';
import Horror1 from './img/hororr.jpg';
import Fantasy1 from './img/Fantasy1.jpg';
import RPG1 from './img/FNT.jpg';
import Sur1 from './img/mine.jpg';
import Sport1 from './img/fifa.jpg';
import Strategy from './img/xcom.jpg';


class AllProduct extends Component
{
    render()
    {
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 IsiH" id="isi">
                    <p className="Judul">
                        List Game:
                    </p>
                    <hr/>
                    <div className="col-xs-12 col-sm-12-col-md-12 row" id="Prof">
                            <div className="panel-group" id="lin_Accor">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h3 className="panel-title" data-target="#panel-1"
                                        data-toggle="collapse"
                                        data-parent="#lin_Accor">List Game</h3>
                                    </div>
                                    <div className="panel-body">
                                        <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Nama</th>
                                                    <th>Harga</th>
                                                    <th>Gambar</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td><Link to="/Action1"><a href="#">Fallout 4</a></Link></td>
                                                    <td>Rp.200.000</td>
                                                    <td><img src={Act1} className="img-thumbnail"/></td>
                                                </tr>
                                                <tr>
                                                        <td>Stardew Valley</td>
                                                        <td>Rp.125.000</td>
                                                        <td><img src={Sim1} className="img-thumbnail"/></td>
                                                </tr>
                                                <tr>
                                                        <td>Resident evil biohazard</td>
                                                        <td>Rp.150.000</td>
                                                        <td><img src={Horror1} className="img-thumbnail"/></td>
                                                </tr>
                                                <tr>
                                                        <td>BattleLore</td>
                                                        <td>Rp.75.000</td>
                                                        <td><img src={Fantasy1} className="img-thumbnail"/></td>
                                                </tr>
                                                <tr>
                                                        <td>FFXII</td>
                                                        <td>Rp.135.000</td>
                                                        <td><img src={RPG1} className="img-thumbnail"/></td>
                                                </tr>
                                                <tr>
                                                        <td>Minecraft</td>
                                                        <td>Rp.75.000</td>
                                                        <td><img src={Sur1} className="img-thumbnail"/></td>
                                                </tr>
                                                <tr>
                                                        <td>FIFA</td>
                                                        <td>Rp.200.000</td>
                                                        <td><img src={Sport1} className="img-thumbnail"/></td>
                                                </tr>
                                                <tr>
                                                        <td>Xcom2</td>
                                                        <td>Rp.200.000</td>
                                                        <td><img src={Strategy} className="img-thumbnail"/></td>
                                                </tr>
                                                </tbody>
                                        </table>  
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}
export default AllProduct;