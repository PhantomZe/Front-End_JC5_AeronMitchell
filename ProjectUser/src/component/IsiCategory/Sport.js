import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';   


import Sport1 from './../img/fifa.jpg'


class Sport extends Component
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
            <div class="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 IsiH" id="isi">
                <p class="Judul tes-anim" id="Jgame">
                    Sport Game
                </p>
                <hr/>
                <div class="col-xs-12 col-sm-12 col-md-12 " style={Style}>
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Gambar</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>FIFA</td>
                                <td>Rp.200.000</td>
                                <td><img src={Sport1} class="img-thumbnail"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                <div class="col-xs-12 col-sm-12 col-md-12 " id="my-row" >
                    <hr/>
                    <div class="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p class="Judul" id="anak">
                            What is Sport genre?
                        </p>
                    </div>
                    <div class="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p class="Isinya">
                                A sports game is a video game genre that simulates the practice of sports. Most sports
                                have been recreated with a game, including team sports, track and field, extreme sports 
                                and combat sports. Some games emphasize actually playing the sport (such as the Madden NFL series), 
                                whilst others emphasize strategy and sport management (such as Championship Manager and Out of the 
                                Park Baseball). 
                        </p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 " id="my-row">
                    <div class="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p class="Isinya">
                                Sports games involve physical and tactical challenges, and test the player's precision 
                                and accuracy. Most sports games attempt to model the athletic characteristics 
                                required by that sport, including speed, strength, acceleration, accuracy, and so on. 
                                As with their respective sports, these games take place in a stadium or arena with clear
                                boundaries. Sports games often provide play-by-play and color commentary through the 
                                use of recorded audio.


                        </p>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p class="Judul" id="anak">
                                What do you do in Sport Game
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
} 
export default Sport;