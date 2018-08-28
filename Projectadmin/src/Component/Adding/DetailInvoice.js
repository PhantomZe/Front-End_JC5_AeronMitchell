import React, { Component } from 'react';
import axios from 'axios';
import HeaderM from './../HeaderM';
import HeaderD from './../HeaderD';
import {Redirect} from 'react-router-dom';

class DetailInvoice extends Component
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
        const Detail = this.state.IsiInvoice.map(
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
            <div className="page-wrapper">
                <HeaderM />
                <div className="page-container">
                    <HeaderD />
                    <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>New Game</strong>
                                                    <div className="card-body card-block">
                                                        <div className="table-responsive table--no-card m-b-30">
                                                            <table className="table table-borderless table-striped table-earning">
                                                                <thead>
                                                                    <tr>
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
                                                                </thead>
                                                                <tbody>
                                                                    {Detail}
                                                                    <tr>
                                                                        <td colSpan='5'>TotalPrice</td>
                                                                        <td colSpan='2'>{price}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DetailInvoice;