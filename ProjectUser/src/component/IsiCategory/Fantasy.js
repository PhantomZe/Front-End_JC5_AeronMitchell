import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';   



import Fantasy1 from './../img/Fantasy1.jpg'


class Fantasy extends Component
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
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 col-md-8 IsiH">
                <p className="Judul tes-anim" id="Jgame">
                    Fantasy Game
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
                                <td>BattleLore</td>
                                <td>Rp.75.000</td>
                                <td><img src={Fantasy1} className="img-thumbnail"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                <div className="col-xs-12 col-sm-12 col-md-12" id="my-row" >
                    <hr/>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                            What is Fantasy genre?
                        </p>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                            Fantasy is a genre of speculative fiction set in a fictional universe, often without 
                            any locations, events, or people referencing the real world. Its roots are in oral traditions,
                            which then became literature and drama. From the twentieth century it has expanded further 
                            into various media, including film, television, graphic novels and video games.
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12" id="my-row">
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                            In a fantasy game people can do anything that not usually they cant do in real life such as 
                            fighting monster, magic, and other else and make the gamer imagines what its like to fight monster 
                            or even befriend monster.
                        </p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                                What do you do in Fantasy game
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}
export default Fantasy;