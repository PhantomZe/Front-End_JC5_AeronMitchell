import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import axios from 'axios';
import { connect } from 'react-redux';

import Header from './../Header';
import Footer from './../Footer';


class Invoice1 extends Component
{
    state=
    {
        IsiInvoice:[],
    }
    componentDidMount()
    {
        axios.get(`http://localhost:3001/Cart/6?id=`+this.props.location.state.id).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    IsiInvoice: ambilData.data
                });
            }
        )
    }
    render()
    {
        var i=0
        var price = 0
        for(i=0;i<this.state.IsiInvoice.length;i++)
        {
            price += this.state.IsiInvoice[i].hargatotal
        }
        const IsiInvoice = this.state.IsiInvoice.map(
            (isi, urutan) => 
            {
                var nama=isi.product_name;
                var Category=isi.category_name;
                var jumlah=isi.jumlah;
                var harga=isi.harga;
                var hargatotal=isi.hargatotal
                return <tr key={urutan} style={{textAlign: 'left'}}>
                <td>{urutan+1}</td>
                <td>
                {nama}
                </td>
                <td className="desc">{Category}</td>
                <td className="text-right">Rp.{harga}</td>
                <td>{jumlah}</td>
                <td>{hargatotal}</td>
            </tr>
            }
        );
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 Prof">
                <p className="Judul">
                    Invoice 
                </p>
                <hr id="Menu"/>
                <div className="col-xs-12 col-sm-12 col-md-12 row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                            <table className="Cart table-striped" border="2px">
                            <tr className="JudulC">
                                <th>
                                    No    
                                </th>
                                <th className="text-left">
                                    <p className="nama">Product</p>
                                </th>
                                <th>Category</th>
                                <th className="Harga">
                                    Harga
                                </th>
                                <th className="Quan">
                                    Quantity
                                </th>
                                <th>TotalPrice</th>
                            </tr>
                            {IsiInvoice}
                            <tr>
                                <td colSpan='5'>TotalPrice</td>
                                <td colSpan='2'>{price}</td>
                            </tr>
                            </table>
                        <hr id="Menu"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
} 
function mapStateToProps(state){
    return {
        userid:state.userid
    };
  }
export default connect(mapStateToProps)(Invoice1)