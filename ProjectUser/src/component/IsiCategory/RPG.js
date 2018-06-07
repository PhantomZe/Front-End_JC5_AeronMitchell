import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';   

import RPG1 from './../img/FNT.jpg'


class RPG extends Component
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
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 IsiH">
                <p className="Judul tes-anim" id="Jgame">
                    RPG Game
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
                                <td>FFXII</td>
                                <td>Rp.135.000</td>
                                <td><img src={RPG1} className="img-thumbnail"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row" >
                    <hr/>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                            What is RPG genre?
                        </p>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                            A role-playing video game (commonly referred to as simply a role-playing game or an RPG as well as
                            a computer role-playing game or a CRPG) is a video game genre where the player controls the 
                            actions of a character (and/or several party members) immersed in some well-defined world. 
                            
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row">
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                            Role-playing video games typically rely on a highly developed story and setting,
                            which is divided into a number of quests. Players control one or several characters by issuing
                            commands, which are performed by the character at an effectiveness determined by that character's 
                            numeric attributes. Often these attributes increase each time a character gains a level, 
                            and a character's level goes up each time the player accumulates a certain amount of experience.
                        </p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                                What do you do in RPG game
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
} 
export default RPG;