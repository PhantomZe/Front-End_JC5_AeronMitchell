import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import {Redirect } from 'react-router-dom';
import axios from 'axios';

//import S1 from './img/1.jpg'
import S2 from './img/2.jpg'
import S3 from './img/3.jpg'
import Action from './img/action.jpg'
import Simulation from './img/sim.jpg'
import RPG from './img/rpg.jpg'
import Horror from './img/horor.jpg'
import Strategy from './img/strategy.jpg'
import War from './img/war.jpg'
import Fantasy from './img/fantasy.jpg'
import Survival from './img/surv.jpg'
import Sports from './img/bola.jpg'
import G1 from './img/g1.jpg'
import G2 from './img/g2.jpg'
import G3 from './img/g3.jpg'
import G4 from './img/g4.jpg'
import G5 from './img/g5.jpg'
import G6 from './img/g6.jpg'
import G7 from './img/g7.jpg'
import G8 from './img/g8.jpg'
import G9 from './img/g9.jpg'
function mapStateToProps(state){
    return {
        masuk:state.userid
    };
  }

class Home extends Component
{   
    state={
        username:'',
    }
    componentDidMount()
    {
        axios.get(`http://localhost:3001/Dataid/`+this.props.masuk).then(
            (ambilData) => {
                if(ambilData.data[0].user_name !== '0')
                {
                    this.setState({
                        username: ambilData.data[0].user_name,
                    });
                }   
            }
        )
    }
    render()
    {
        return(
            <div>
                <Header />
                <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 IsiH">
                    <p className="Judul tes-anim">
                        Welcome To BB!
                        <br/>{this.state.username}
                    </p>
                    <hr/>
                    <br/>
                    <p className="Judul" id="GG">
                            The Most Popular Category Game
                    </p>
                    <hr/>
                    <div className=" col-md-offset-2 col-xs-12 col-sm-12 col-md-8 Slide carousel slide" id="iniCarousel" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="item active">
                                <img className="img-thumbnail" src={require('./img/1.jpg')} id="s1"/>
                            </div>
                            <div className="item">
                                <img className="img-thumbnail" src={S2} id="s2"/>
                            </div>
                            <div className="item">
                                <img className="img-thumbnail" src={S3} id="s3"/>
                            </div>
                        </div>
                        <a className="right carousel-control" href="#iniCarousel" data-slide="next">
                            <span className=
                            "glyphicon glyphicon-chevron-right">
                            </span>
                        </a>
                        <a className="left carousel-control" href="#iniCarousel" data-slide="prev">
                            <span className=
                            "glyphicon glyphicon-chevron-left">
                            </span>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-12 row" id="Game1">
                        <div className="col-sm-6 col-md-12 Game1">
                        <hr/>
                            <div className="col-md-4 Game" id="G1">
                                <h4>Action Game</h4>
                                <div className="Game" id="G2">
                                    <a href="#"><img src={Action} className="imag"/></a>
                                </div> 
                            </div>
                            <div className="col-md-4 Game" id="G1">
                                <h4>Simulation Game</h4>
                                <div className="Game" id ="G2">
                                    <a href="#"><img src={Simulation} className="imag"/></a>
                                </div>
                            </div>
                            <div className="col-md-4 Game" id="G1">
                                <h4>Strategy game</h4>
                                <div className="Game" id="G2">
                                    <a href="#"><img src={Strategy} className="imag"/></a>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="col-sm-6 col-md-12 row" id="Game2">
                            <div className="col-sm-6 col-md-12 Game1">
                                <div className="col-md-4 Game" id="G1">
                                    <h4>Horor Game</h4>
                                    <div className="Game" id="G2">
                                        <a href="#"><img src={Horror} className="imag"/></a>
                                    </div> 
                                </div>
                                <div className="col-md-4 Game" id="G1">
                                    <h4>Survival Game</h4>
                                    <div className="Game" id ="G2">
                                        <a href="#"><img src={Survival} className="imag"/></a>
                                    </div>
                                </div>
                                <div className="col-md-4 Game" id="G1">
                                    <h4>RPG game</h4>
                                    <div className="Game" id="G2">
                                        <a href="#"><img src={RPG} className="imag"/></a>
                                    </div>
                                </div>
                            </div>    
                    </div>
                    <br/>
                    <div className="col-sm-6 col-md-12 row" id="Game3">
                            <div className=" col-sm-6 col-md-12 Game1">
                                <div className="col-md-4 Game" id="G1">
                                    <h4>Fantasy Game</h4>
                                    <div className="Game" id="G2">
                                        <a href="#"><img src={Fantasy} className="imag"/></a>
                                    </div> 
                                </div>
                                <div className="col-md-4 Game" id="G1">
                                    <h4>Sports Game</h4>
                                    <div className="Game" id ="G2">
                                        <a href="#"><img src={Sports} className="imag"/></a>
                                    </div>
                                </div>
                                <div className="col-md-4 Game" id="G1">
                                    <h4>War game</h4>
                                    <div className="Game" id="G2">
                                        <a href="#"><img src={War} className="imag"/></a>
                                    </div>
                                </div>
                            </div> 
                        <hr/>   
                    </div>
                    <br/>
                    <div className="col-sm-12 col-md-12 row" id="Late">
                        <hr/>
                        <div className="col-sm-12 col-md-12 Judul">
                            <p className="Judul" id="Latest">
                                Latest Gallery
                            </p>
                            <p className="IsiJudul" id="Isi Latest">
                                View Our Galery
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 " id="Galery">
                            <div className="col-sm-12 col-md-12 Galery">
                                <hr/>
                                <div className=" col-xs-12 col-sm-12 col-md-4  gal">
                                    <img src={G1} className="GG img-thumbnail"/>
                                </div>
                                <div className=" col-xs-12 col-sm-12 col-md-4  gal">
                                    <img src={G2} className="GG img-thumbnail"/>               
                                </div>
                                <div className=" col-xs-12 col-sm-12 col-md-4  gal">
                                    <img src={G3} className="GG img-thumbnail"/>           
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 " id="Galery">
                                <div className="col-sm-12 col-md-12 Galery">
                                    <div className=" col-xs-12 col-sm-12 col-md-4  gal">
                                        <img src={G4} className="GG img-thumbnail"/>
                                    </div>
                                    <div className=" col-xs-12 col-sm-12 col-md-4  gal">
                                        <img src={G5} className="GG img-thumbnail"/>           
                                    </div>
                                    <div className=" col-xs-12 col-sm-12 col-md-4  gal">
                                        <img src={G6} className="GG img-thumbnail"/>             
                                    </div>
                                </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 " id="Galery">
                            <div className="col-sm-12 col-md-12 Galery">
                                <div className=" col-xs-12 col-sm-12 col-md-4 gal">
                                    <img src={G7} className="GG img-thumbnail"/>
                                </div>
                                <div className=" col-xs-12 col-sm-12 col-md-4 gal">
                                    <img src={G8} className="GG img-thumbnail"/>                   
                                </div>
                                <div className=" col-xs-12 col-sm-12 col-md-4 gal">
                                    <img src={G9} className="GG img-thumbnail"/>                    
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 row foter">
                    
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default connect(mapStateToProps)(Home)