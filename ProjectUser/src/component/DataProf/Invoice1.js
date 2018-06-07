import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './../Header';
import Footer from './../Footer';


class Invoice1 extends Component
{
    render()
    {
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 Prof">
                <p className="Judul">
                    Invoice 1
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

                                    </tr>
                                    <tr className="IsiC">
                                        <td className="Prod">
                                            <p className="nama">Fallout 4</p>
                                        </td>
                                        <td className="Quan">
                                            1
                                        </td>
                                        <td className="Harga">
                                            Rp.200.000,00
                                        </td>
                                    </tr>
                                    <tr className="AkhirC">
                                        <td colspan="2">
                                            Total
                                        </td>
                                        <td className="Harga">
                                            Rp.200.000,00
                                        </td>
                                    </tr>
                            </table>
                        <hr id="Menu"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
} 
export default Invoice1;