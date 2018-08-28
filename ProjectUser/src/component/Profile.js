import React, { Component } from 'react';
import { Link, Route,Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import axios from 'axios';
import { connect } from 'react-redux';

import Data1 from './DataProf/Data1';
import Data2 from './DataProf/Data2';
import Data3 from './DataProf/Data3';


import FotoUser from './img/Foto.jpg'



class Profile extends Component
{
    state=
    {
        Invoice:[],
        redirect:false
    }
    componentDidMount()
    {
        axios.get(`http://localhost:3001/Cart/1?id=`+this.props.userid).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    Invoice:ambilData.data
                });
            }
        )
    }
    UpdateBayar = (obj) =>
    {
        console.log(obj.id)
        axios.post(`http://localhost:3001/Cart/6`,
        {
            id:obj.id,
            process:1
        })
        axios.get(`http://localhost:3001/Cart/1?id=`+this.props.userid).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    Invoice:ambilData.data
                });
            }
        )
    }
    render()
    {
        console.log(this.state.Invoice)
        if(this.props.userid === 0)
        {
            return <Redirect to='/Login'/>
        }
        const IsiInvoice = this.state.Invoice.map(
            (isi, urutan) => 
            {
                var id= isi.id;
                var nama_penerima=isi.nama_penerima;
                var telp=isi.hp_penerima;
                var alamat=isi.alamat;
                var kodepos=isi.kode_pos;
                var finalprice=isi.finalprice;
                var carakirim=isi.carakirim;
                var carabayar=isi.carabayar;
                var process=isi.processdata; 
                var time=isi.Time.split('T')[0];
                if(process == 0)
                {
                    return <tr key={urutan} style={{textAlign: 'left'}}>
                        <td>{urutan+1}</td>
                        <td>
                        #{id}
                        </td>
                        <td className="desc">{nama_penerima}</td>
                        <td className="text-right">{telp}</td>
                        <td className="text-right">    
                            {alamat}
                        </td>
                        <td>{kodepos}</td>
                        <td>Rp.{finalprice}</td>
                        <td>{carakirim}</td>
                        <td>{carabayar}</td>
                        <td>{time}</td>
                        <td>
                            <button className='btn btn-success' onClick={() => this.UpdateBayar({id})}>Bayar</button>&nbsp;&nbsp;
                            <Link to={{pathname:'/Invoice1',state:{id:id}}}><button className='btn btn-info'>Detail</button></Link>
                        </td>
                    </tr>
                }
                else if(process == 1)
                {
                    return <tr key={urutan} style={{textAlign: 'left'}}>
                        <td>{urutan+1}</td>
                        <td>
                        #{id}
                        </td>
                        <td className="desc">{nama_penerima}</td>
                        <td className="text-right">{telp}</td>
                        <td className="text-right">    
                            {alamat}
                        </td>
                        <td>{kodepos}</td>
                        <td>Rp.{finalprice}</td>
                        <td>{carakirim}</td>
                        <td>{carabayar}</td>
                        <td>{time}</td>
                        <td>
                            <button className='btn btn-success disabled' onClick={() => this.UpdateBayar({id})}>Bayar</button>&nbsp;&nbsp;
                            <Link to={{pathname:'/Invoice1',state:{id:id}}}><button className='btn btn-info'>Detail</button></Link>
                        </td>
                    </tr>
                }
                else if(process == 2)
                {
                    return <tr key={urutan} style={{textAlign: 'left'}}>
                        <td>{urutan+1}</td>
                        <td>
                        #{id}
                        </td>
                        <td className="desc">{nama_penerima}</td>
                        <td className="text-right">{telp}</td>
                        <td className="text-right">    
                            {alamat}
                        </td>
                        <td>{kodepos}</td>
                        <td>Rp.{finalprice}</td>
                        <td>{carakirim}</td>
                        <td>{carabayar}</td>
                        <td>{time}</td>
                        <td>
                            <Link to={{pathname:'/Invoice1',state:{id:id}}}><button className='btn btn-info'>Detail</button></Link>
                        </td>
                    </tr>
                }
            }
        );
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 Prof">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="col-xs-4 col-sm-4 col-md-4">
                        <img src={FotoUser} className="Fotoid img-thumbnail"/>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8">
                        <div className="panel-group" id="lin_Accor">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title" data-target="#panel-1"
                                    data-toggle="collapse"
                                    data-parent="#lin_Accor">Profile</h3>
                                </div>
                                <div className="panel-body">
                                    <h4>Nama: ...</h4>
                                    <hr/>
                                    <h4>Email: ...</h4>
                                    <hr/>
                                    <h4>Tgl Lahir: thn... bulan... tanggal...</h4>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="col-xs-12 col-sm-12-col-md-12 row" id="Prof">
                    <div className="panel-group" id="lin_Accor">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title" data-target="#panel-1"
                                data-toggle="collapse"
                                data-parent="#lin_Accor">Edit Profile</h3>
                            </div>
                            <div className="panel-body">
                                <ul className="nav nav-pills nav-justified">
                                    <li className="nav-item" id="data1" onClick={this.PDTA}><Link to="/Profile/"><a href="#"><h5 className="nav-link">DataA</h5></a></Link></li>
                                    <li className="nav-item" id="data2" onClick={this.PDTB}><Link to="/Profile/DataB"><a href="#"><h5 className="nav-link">DataB</h5></a></Link></li>
                                    <li className="nav-item" id="data3" onClick={this.PDTC}><Link to="/Profile/DataC"><a href="#"><h5 className="nav-link">DataC</h5></a></Link></li>
                                </ul>
                                <Route exact path="/Profile/" component={Data1}/>
                                <Route path="/Profile/DataB" component={Data2}/>
                                <Route path="/Profile/DataC" component={Data3}/>
                                <hr/>
                                <input type="submit" id="submit" value="Change"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12-col-md-12 row" id="Prof">
                        <div className="panel-group" id="lin_Accor">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title" data-target="#panel-1"
                                    data-toggle="collapse"
                                    data-parent="#lin_Accor">Invoice</h3>
                                </div>
                                <div className="panel-body" id="ResTab">
                                <h4>Cara Pembayaran</h4>
                                <p>Transfer ke rekening ****** ke debit bca dengan harga yang ditentukan dengan informasi tambahan #nomor id</p>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>
                                                    No
                                                </th>
                                                <th>
                                                    id
                                                </th>
                                                <th>
                                                    Nama Penerima
                                                </th>
                                                <th>
                                                    Telepon
                                                </th>
                                                <th>
                                                    Alamat
                                                </th>
                                                <th>
                                                    KodePos
                                                </th>
                                                <th>
                                                    Price
                                                </th>
                                                <th>
                                                    Pengiriman
                                                </th>
                                                <th>
                                                    Pembayaran
                                                </th>
                                                <th>
                                                    Time
                                                </th>
                                                <th>
                                                    
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <tr>
                                                <td>
                                                    1.
                                                </td>
                                                <td>
                                                    #1
                                                </td>
                                                <td>
                                                    Rp.200.000,00
                                                </td>
                                                <td>
                                                    28/4/2018
                                                </td>
                                                <td>
                                                    <a href="#"><Link to='/Invoice1'><button className="btn btn-primary">Details</button></Link></a>
                                                </td>
                                            </tr> */}
                                            {IsiInvoice}
                                        </tbody>
                                    </table>
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
export default connect(mapStateToProps)(Profile)