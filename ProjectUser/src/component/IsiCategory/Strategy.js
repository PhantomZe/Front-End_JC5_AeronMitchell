import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';   


import Str1 from './../img/xcom.jpg'


class Strategy extends Component
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
                    Strategy Game
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
                                <td>Xcom2</td>
                                <td>Rp.200.000</td>
                                <td><img src={Str1} className="img-thumbnail"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row" >
                    <hr/>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                            What is Strategy genre?
                        </p>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                                A strategy game or strategic game is a game (e.g. video or board game) in which the players' 
                                uncoerced, and often autonomous decision-making skills have a high significance in determining 
                                the outcome. Almost all strategy games require internal decision tree style thinking, and typically 
                                very high situational awareness.
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row">
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                                Strategy video games are categorized based on whether they offer the continuous gameplay of 
                                real-time strategy (RTS), or the discrete phases of turn-based strategy (TBS).[8] Often the 
                                computer is expected to emulate a strategically thinking "side" similar to that of a human player 
                                (such as directing armies and constructing buildings), or emulate the "instinctive" actions 
                                of individual units that would be too tedious for a player to administer (such as for a peasant 
                                to run away when attacked, as opposed to standing still until otherwise ordered by the player); 
                                hence there is an emphasis on artificial intelligence.
                        </p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                                What do you do in Strategy Game
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
} 
export default Strategy;