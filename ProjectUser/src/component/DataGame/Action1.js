import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';

import Act1 from './../img/Fallout.jpg'

class Action1 extends Component
{
    render()
    {
        var TO=
        {
            background:'yellow'
        }
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 IsiH" id="isi">
                <p className="Judul">
                    Fallout 4
                </p>
                <hr/>
                <div className="GambarProd">
                    <img src={Act1} className="img-thumbnail" id="GambarP"/> 
                </div>
                <div className="DetailProd">
                    <h2 className="Prod">System Requirement</h2>
                    <hr/>
                    <div className="col-xs-12 col-sm-12 col-md-12 row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <p className="MinMax">
                                Minimum:
                            </p>
                            Requires a 64-bit processor and operating system
                            <br/>
                            <gr>OS:</gr>Windows 7/8/10 (64-bit OS required)
                            <br/>
                            <gr>Processor:</gr>Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent 
                            <br/>
                            <gr>Memory:</gr>8 GB RAM
                            <br/>
                            <gr>Graphics:</gr>NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent
                            <br/>
                            <gr>Storage:</gr>30 GB available space
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <p className="MinMax">
                                Maximum:
                            </p>
                            Requires a 64-bit processor and operating system
                            <br/>
                            <gr>OS:</gr>Windows 7/8/10 (64-bit OS required)
                            <br/>
                            <gr>Processor:</gr> Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent
                            <br/>
                            <gr>Memory:</gr>8 GB RAM
                            <br/>
                            <gr>Graphics:</gr>NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent
                            <br/>
                            <gr>Storage:</gr>30 GB available space
                        </div>
                    </div>
                </div>
                <div className="Beli">
                     <div className="Add">
                         <h1>Buy</h1>
                         <div className="TO" style={TO}>
                            <div className="col-xs-12 col-sm-12 col-md-12 row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <p>Rp.200.000</p>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <button className="btn btn-primary">Add To Cart</button>
                                </div>
                            </div>
                         </div>
                     </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}
export default Action1;