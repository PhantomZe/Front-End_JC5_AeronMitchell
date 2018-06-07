import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


import Header from './../Header';
import Footer from './../Footer';   

import war1 from './../img/xcom.jpg'


class War extends Component
{
    render()
    {
        var Style=
        {
            background:'lightblue'
        }
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 IsiH" id="isi">
                <p className="Judul tes-anim" id="Jgame">
                    War Game
                </p>
                <hr/>
                <div className="col-xs-12 col-sm-12 col-md-12" style={Style}>
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
                                <td>Xcom2</td>
                                <td>Rp.200.000</td>
                                <td><img src={war1} className="img-thumbnail"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                <div className="col-xs-12 col-sm-12 col-md-12" id="my-row">
                    <hr/>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                            What is War genre?
                        </p>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                            A wargame (also war game) is a strategy game that deals with military operations of various 
                            types, real or fictional. Wargaming is the hobby dedicated to the play of such games, which 
                            can also be called conflict simulations, or consims for short.
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12" id="my-row">
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                                Wargames are generally categorized as historical, hypothetical, fantasy, or science fiction. 
                                Historical games form by far the largest group. These games are based upon real events and 
                                attempt to represent a reasonable approximation of the actual forces, terrain, and other material 
                                factors faced by the actual participants. Hypothetical games are games grounded in historical fact 
                                but concern battles or conflicts that did not (or have yet to) actually happen. 
                        </p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                                What do you do in War Game
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
} 
export default War;