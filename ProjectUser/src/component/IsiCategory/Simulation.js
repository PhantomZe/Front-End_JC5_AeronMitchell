import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';   



import Sim1 from './../img/2.jpg'


class Simulation extends Component
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
                    Simulation Game
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
                                <td>Stardew Valley</td>
                                <td>Rp.125.000</td>
                                <td><img src={Sim1} className="img-thumbnail"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row" >
                    <hr/>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                            What is Simulation genre?
                        </p>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                            A simulation video game describes a diverse super-category of video games, 
                            generally designed to closely simulate real world activities.
                            simulation game attempts to copy various activities from real life in the form of a game for 
                            various purposes such as training, analysis, or prediction. Usually there are no strictly 
                            defined goals in the game, with the player instead allowed to control a character freely.
                            Well-known examples are war games, business games, and role play simulation
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row">
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                            players build, expand or manage fictional communities or projects with limited resources.
                            Strategy games sometimes incorporate CMS aspects into their game economy, as players must
                            manage resources while expanding their projects. Pure CMS games differ from strategy games 
                            in that "the player's goal is not to defeat an enemy, but to build something within the 
                            context of an ongoing process." Games in this category are sometimes also called 
                            "management games"
                        </p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                                What do you do in Simulation game
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}
export default Simulation;