import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { connect } from 'react-redux';

import Kredit from './img/Kredit.jpg';
import Cash from './img/Cash.jpg';
import Debit from './img/debit.jpg';

class Cart extends Component
{
    state=
    {
        Cart:[],
    }
    componentDidMount()
    {
        axios.get(`http://localhost:3001/Cart/0?id=`+this.props.userid).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    Cart:ambilData.data
                });
            }
        )
    }
    Change = (obj) => 
    {
        var x=obj.target.name;
        axios.post(`http://localhost:3001/Cart/5`,
        {
                idcart:this.state.Cart[x].id,
                jumlah:obj.target.value,
                harga:this.state.Cart[x].harga    
        })
        axios.get(`http://localhost:3001/Cart/0?id=`+this.props.userid).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    Cart:ambilData.data
                });
            }
        ) 
    }
    AddCart = (obj) =>
    {
        axios.post(`http://localhost:3001/Cart/1`,
        {
            userid:this.props.userid,
            alamat:obj.alamat.value,
            Hp:obj.hp.value,
            Nama:obj.Nama.value,
            KodePos:obj.Kodepos.value
        }).then(function(response)
        {
    
        })
    }
    render()
    {
        if(this.props.userid === 0)
        {
            return <Redirect to='/Login'/>
        }
        const IsiCart = this.state.Cart.map(
            (isi, urutan) => 
            {
                var id= isi.id;
                var namaProduk = isi.product_name;
                var Category = isi.category;
                var harga = isi.harga;
                var jumlah = isi.jumlah;
                var totalprice=isi.finalprice;
                return <tr key={urutan} style={{textAlign: 'left'}}>
                <td>{urutan+1}</td>
                <td>
                {namaProduk}
                </td>
                <td className="desc">{Category}</td>
                <td className="text-right">{harga}</td>
                <td className="text-right">    
                    <input type="number" onChange={this.Change} name={urutan} className="StyleG" defaultValue={jumlah}/>
                </td>
                <td>{totalprice}</td>
                <td><button className='btn btn-danger'>Cancel</button></td>
            </tr>
            }
        );
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
                                        <th className="Cancel">
                                            
                                        </th>
                                    </tr>
                                    {IsiCart}
                            </table>
                        <hr id="Menu"/>
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
                                <input className="form-control" type="text" ref='alamat' id="AlamatPenerima" placeholder="Alamat" required/>
                                <br/>
                                <div className="col-xs-12 col-sm-12 col-md-12 row">
                                    <div className="col-xs-4 col-sm-4-col-md-4 ">
                                            <h3>Nama Penerima</h3>
                                            <input className="form-control" ref='Nama' type="text" id="NamaPenerima" placeholder="Nama"/>
                                    </div>
                                    <div className="col-xs-4 col-sm-4-col-md-4 ">
                                            <h3>Kode Pos</h3>
                                            <input className="form-control" type="Number" ref='Kodepos' id="kode pos" placeholder="Kode Pos" required/>         
                                    </div>
                                    <div className="col-xs-4 col-sm-4-col-md-4 isi">
                                            <h3>No.Hp.Penerima</h3>
                                            <input className="form-control" type="number" id="HpPenerima" ref='hp' placeholder="No.Hp" required/>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 isi">
                                            <input type="submit" onClick={() => this.AddCart(this.refs)} value="Kirim" id="Kirim"/>
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
function mapStateToProps(state){
    return {
        userid:state.userid
    };
  }
export default connect(mapStateToProps)(Cart)