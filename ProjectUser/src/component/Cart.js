import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';


import Kredit from './img/Kredit.jpg';
import Cash from './img/Cash.jpg';
import Debit from './img/debit.jpg';

class Cart extends Component
{
    render()
    {
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 Prof">
                <p className="Judul">
                    Cart
                </p>
                <hr id="Menu"/>
                <div className="col-xs-12 col-sm-12 col-md-12 row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                            <table className="Cart table-striped" border="2px">
                                    <tr className="JudulC">
                                        <th className="Prod">
                                            <p className="nama">Product</p>
                                        </th>
                                        <th className="Quan">
                                            Quantity
                                        </th>
                                        <th className="Harga">
                                            Harga
                                        </th>
                                        <th className="Cancel">
                                            Confirmasi
                                        </th>
                                    </tr>
                                    <tr className="IsiC">
                                        <td className="Prod">
                                            <p className="nama">Fallout 4</p>
                                        </td>
                                        <td className="Quan">
                                            <input type="number" className="StyleG" value="1"/>
                                        </td>
                                        <td className="Harga">
                                            Rp.200.000,00
                                        </td>
                                        <td className="Cancel">
                                            <button className="btn btn-danger">Cancel</button>
                                        </td>
                                    </tr>
                                    <tr className="AkhirC">
                                        <td colspan="2">
                                            Total
                                        </td>
                                        <td className="Harga">
                                            Rp.200.000,00
                                        </td>
                                        <td className="Cancel">

                                        </td>
                                    </tr>
                            </table>
                        <hr id="Menu"/>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 row">
                    <p className="Pemb">
                        Pembayaran
                    </p>
                    <hr id="Menu"/>
                        <div className="col-xs-4 col-sm-4 col-md-4">
                            <img src={Kredit} id="Kredit"/>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4">
                            <img src={Cash} id="Cash"/>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4">
                            <img src={Debit} id="Debit"/>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4">
                            <radio>
                            <input type="radio" className="Check" name="Pemb"/>
                        </radio>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4">
                            <radio>
                            <input type="radio" className="Check" name="Pemb" checked/>
                            </radio>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4">
                            <radio>
                            <input type="radio" className="Check" name="Pemb"/>
                            </radio>
                        </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 row">
                    <hr id="Menu"/>
                    <div className="panel-group" id="lin_Accor">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title" data-target="#panel-1"
                                    data-toggle="collapse"
                                    data-parent="#lin_Accor">Tujuan</h3>
                                </div>
                                <div className="panel-body">
                                <h3>Alamat</h3>
                                <input className="form-control" type="text" id="AlamatPenerima" placeholder="Alamat" required/>
                                <br/>
                                <div className="col-xs-12 col-sm-12 col-md-12 row">
                                    <div className="col-xs-4 col-sm-4-col-md-4 ">
                                            <h3>Nama Penerima</h3>
                                            <input className="form-control" type="text" id="NamaPenerima" placeholder="Nama"/>
                                    </div>
                                    <div className="col-xs-4 col-sm-4-col-md-4 ">
                                            <h3>Kode Pos</h3>
                                            <input className="form-control" type="Number" id="kode pos" placeholder="Kode Pos" required/>         
                                    </div>
                                    <div className="col-xs-4 col-sm-4-col-md-4 isi">
                                            <h3>No.Hp.Penerima</h3>
                                            <input className="form-control" type="number" id="HpPenerima" placeholder="No.Hp" required/>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 isi">
                                            <input type="submit" value="Kirim" id="Kirim"/>
                                        </div>
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
export default Cart;