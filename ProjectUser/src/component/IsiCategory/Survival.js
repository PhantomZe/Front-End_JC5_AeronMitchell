import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';   

import Sur1 from './../img/mine.jpg'


class Survival extends Component
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
                    Survival Game
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
                            <td>Minecraft</td>
                            <td>Rp.75.000</td>
                            <td><img src={Sur1} className="img-thumbnail"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row" >
                    <hr/>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                            What is Survival genre?
                        </p>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                                Survival games are a subgenre of action video games set in a hostile, intense, 
                                open-world environment, where players generally begin with minimal equipment and are 
                                required to collect resources, craft tools, weapons, and shelter, and survive as long as 
                                possible.
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 " id="my-row">
                    <div className="col-xs-8 col-sm-8 col-md-8 kiri" >
                        <p className="Isinya">
                                Many survival games are based on randomly or procedurally generated persistent environments;
                                more-recently created games are often playable online, allowing multiple players to interact
                                in a single persistent world. Survival games are generally open-ended with no set goals and 
                                are often closely related to the survival horror genre, in which the player must survive within 
                                a supernatural setting, such as a zombie apocalypse.
                        </p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 kanan" >
                        <p className="Judul" id="anak">
                                What do you do in Survival game
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        );
    }
} 
export default Survival;