import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';   



import Horror1 from './../img/hororr.jpg'


class Horror extends Component
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
                    Horror Game
                </p>
                <hr/>
                <div className="col-xs-12 col-sm-12 col-md-12 " style={Style}>
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
                                <td>Resident evil biohazard</td>
                                <td>Rp.150.000</td>
                                <td><img src={Horror1} className="img-thumbnail"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row" >
                    <hr/>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                            What is Horror genre?
                        </p>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                            Horror games feature classNameic "horror" elements. 
                            Usually refers to traditional gothic horror, but can include other horror styles.    
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row">
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                            In horror games usually people play with the survival category to make the gamer becomes surprised
                            even more than the usually and make it more interesting. 
                        </p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                                What do you do in horror game
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
} 
export default Horror;