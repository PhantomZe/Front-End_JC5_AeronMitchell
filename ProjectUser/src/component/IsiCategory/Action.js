import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';   


import Act1 from './../img/Fallout.jpg'


class Action extends Component
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
                    Action Game
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
                                <td><Link to="/Action1"><a href="#">Fallout 4</a></Link></td>
                                <td>Rp.200.000</td>
                                <td><img src={Act1} className="img-thumbnail"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                <div className="col-xs-12 col-sm-12 col-md-12" id="my-row" >
                    <hr/>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                            What is action genre?
                        </p>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                                The action game is a video game genre that emphasizes physical challenges, 
                                including hand–eye coordination and reaction-time. The genre includes a large variety of sub-genres,
                                such as fighting games, beat 'em ups, shooter games and platform games which are widely considered
                                the most important action games, though multiplayer online battle arena and some real-time strategy
                                games are also considered to be action games.
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row">
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                                In an action game, the player typically controls a character often in the form of a protagonist 
                                or avatar. This player character must navigate a level, collecting objects, avoiding obstacles,
                                and battling enemies with their natural skills as well as weapons and other tools at their disposal.
                                At the end of a level or group of levels, the player must often defeat a boss enemy that is more 
                                challenging and often a major antagonist in the game's story. Enemy attacks and obstacles deplete the 
                                player character's health and lives, and the player receives a Game over when they run out of lives. 
                                Alternatively, the player gets to the end of the game by finishing a sequence of levels and seeing the 
                                credits.
                        </p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                                What do you do in action Game
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
} 
export default Action;