import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import HeaderM from './HeaderM';
import HeaderD from './HeaderD';


class Table extends Component
{
    state=
    {
        IsiCategory:[],
        IsiProduk:[],
        idCategory:0,
        isicart:[],
        redirect:false
    }
    componentDidMount()
    {
        axios.get(`http://localhost:3001/IsiCategory`).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    IsiCategory: ambilData.data
                });
            }
        )
        axios.get(`http://localhost:3001/IsiProduk/`+this.state.idCategory).then(
            /** Disini fungsi */
            (ProdukData) => {
                this.setState({
                    IsiProduk: ProdukData.data
                });
            }
        )
        axios.get(`http://localhost:3001/Cart/5`).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    isicart: ambilData.data
                });
            }
        )
    }
    UpCategory = (obj) => 
    {
        axios.get(`http://localhost:3001/IsiProduk/`+obj.target.value).then(
            /** Disini fungsi */
            (ProdukData) => {
                this.setState({
                    IsiProduk: ProdukData.data
                });
            }
        )
        this.setState({
            idCategory:obj.target.value
        });
    }
    Delete = (obj) =>
    {
        axios.post('http://localhost:3001/DeleteInvoice',
        {
            id:obj.id
        })
        axios.get(`http://localhost:3001/Cart/5`).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    isicart: ambilData.data
                });
            }
        )
    }
    Confirmasi = (obj) =>
    {
        axios.post('http://localhost:3001/Confirm/2',
        {
            id:obj.id
        })
        axios.get(`http://localhost:3001/Cart/5`).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    isicart: ambilData.data
                });
            }
        )
    }
    Cancel = (obj) =>
    {
        axios.post('http://localhost:3001/Confirm/0',
        {
            id:obj.id
        })
        axios.get(`http://localhost:3001/Cart/5`).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    isicart: ambilData.data
                });
            }
        )
    }
    DeleteProduk = (obj) =>
    {
        axios.post('http://localhost:3001/DeleteProduct',
        {
            id:obj.id
        })
        axios.get(`http://localhost:3001/IsiProduk/`+this.state.idCategory).then(
            /** Disini fungsi */
            (ProdukData) => {
                this.setState({
                    IsiProduk: ProdukData.data
                });
            }
        )
    }
    DeleteCategory = (obj) =>
    {
        var self=this
        axios.post('http://localhost:3001/DeleteCategory',
        {
            id:obj.id
        }).then(function(response)
        {
            console.log(response.data)
            if(response.data==0)
            {
                self.setState({
                    redirect:true
                });
            }
        })
        axios.get(`http://localhost:3001/IsiCategory`).then(
            /** Disini fungsi */
            (ambilData) => {
                this.setState({
                    IsiCategory: ambilData.data
                });
            }
        )
    }
    DeleteAll = (obj) =>
    {
        axios.post('http://localhost:3001/DeleteAll',
        {
            id:obj.id,
            IsiProduk:this.state.IsiProduk
        })
        axios.get(`http://localhost:3001/IsiProduk/`+this.state.idCategory).then(
            /** Disini fungsi */
            (ProdukData) => {
                this.setState({
                    IsiProduk: ProdukData.data
                });
            }
        )
        console.log(this.state.IsiProduk)
    }
    render()
    {   
        if(this.state.redirect)
        {
            alert('Delete Produk yang bersagkutan dengan category')
        }
        const Category = this.state.IsiCategory.map(
            (isi, urutan) => 
            {
                var id= isi.id;
                var namacategory = isi.category;
                return <tr key={urutan} style={{textAlign: 'left'}}>
                <td>
                <Link to={{pathname:'/EditCategory',state:{id:id}}}><h4>{namacategory}</h4></Link>&nbsp;
                </td>
                <td>    
                    <button className="btn btn-danger btn-sm"onClick={() => this.DeleteCategory({id})}>Delete</button>
                </td>
            </tr>
            }
        );
        const Produk = this.state.IsiProduk.map(
            (isi, urutan) => 
            {
                var id= isi.id;
                var namaProduk = isi.product_name;
                var Category = isi.category;
                var harga = isi.harga;
                var Stock = isi.stock;
                if(Stock == 0)
                {
                    return <tr key={urutan} style={{textAlign: 'left',backgroundColor:'red'}}>
                        <td>{urutan+1}</td>
                        <td>
                        <h4>{namaProduk}</h4>
                        </td>
                        <td className="desc">{Category}</td>
                        <td className="text-right">{harga}</td>
                        <td>{Stock}</td>
                        <td className="text-right">    
                            <div className="table-data-feature">
                                <Link to={{pathname:'/Edit',state:{id:id}}} className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                    <i className="zmdi zmdi-edit"></i>
                                </Link>
                                <button className="item" data-toggle="tooltip" onClick={() => this.DeleteProduk({id})} data-placement="top" title="Delete">
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                }
                else
                {
                    return <tr key={urutan} style={{textAlign: 'left'}}>
                        <td>{urutan+1}</td>
                        <td>
                        <h4>{namaProduk}</h4>
                        </td>
                        <td className="desc">{Category}</td>
                        <td className="text-right">{harga}</td>
                        <td>{Stock}</td>
                        <td className="text-right">    
                            <div className="table-data-feature">
                                <Link to={{pathname:'/Edit',state:{id:id}}} className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                    <i className="zmdi zmdi-edit"></i>
                                </Link>
                                <button className="item" data-toggle="tooltip"  onClick={() => this.DeleteProduk({id})} data-placement="top" title="Delete">
                                    <i className="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                }
            }
        );
        const OptCategory = this.state.IsiCategory.map(
            (isi, urutan) => 
            {
                var id= isi.id;
                var namacategory = isi.category;
                return <option key={urutan} value={id} style={{textAlign: 'left'}}>
                {namacategory}
                </option>
            }   
        );
        const cart=this.state.isicart.map(
            (isi,urutan) =>
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
                            
                                <button type="button" className='btn btn-danger' onClick={() => this.Delete({id})}>Delete</button>&nbsp;&nbsp;
                                <Link to={{pathname:'/DetailInvoice',state:{id:id}}}><button type="button" className='btn btn-info'>Detail</button></Link>
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
                            <button className='btn btn-success' onClick={() => this.Confirmasi({id})}>Confirmasi</button>&nbsp;&nbsp;
                            <button type="button" className='btn btn-danger' onClick={() => this.Cancel({id})}>Cancel</button>&nbsp;&nbsp;
                            <Link to={{pathname:'/DetailInvoice',state:{id:id}}}><button className='btn btn-info'>Detail</button></Link>
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
                            <Link to={{pathname:'/DetailInvoice',state:{id:id}}}><button className='btn btn-info'>Detail</button></Link>
                        </td>
                    </tr>
                }
            }
        )
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
                                        <div className="overview-wrap">
                                            <h2 className="title-1">Games</h2>
                                            <div className="btn-group btn-group-lg navbar-right">
                                            <a href="#"><button className="btn btn-lg btn-outline-primary">
                                            <Link to="/Additem"><i className="zmdi zmdi-plus"></i>add item</Link></button></a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="#"><button className="btn btn-lg btn-outline-primary">
                                            <Link to="/AddCategory"><i className="zmdi zmdi-plus"></i>add Category</Link></button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-t-25">
                                    <div className="col-lg-9">
                                    <div className="table-data__tool">
                                        <div className="table-data__tool-left">
                                            <div className="rs-select2--light rs-select2--md">
                                                <select onChange={this.UpCategory} className="js-select2" name="property">
                                                    <option selected="selected" value='0' >All Properties</option>
                                                    {OptCategory}
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                                </div>
                                            </div>
                                            <div className="table-data__tool-right">
                                            </div>
                                        </div>
                                        <div className="table-responsive table--no-card m-b-30">
                                            <table className="table table-borderless table-striped table-earning">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Game Name</th>
                                                        <th>Category</th>
                                                        <th className="text-right">price</th>
                                                        <th>Stock</th>
                                                        <th><button className="btn btn-danger btn-sm"onClick={() => this.DeleteAll({id:this.state.idCategory})}>Delete</button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Produk}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="au-card au-card--bg-blue au-card-top-countries m-b-30">
                                            <div className="au-card-inner">
                                                <div className="table-responsive">

                                                    <table  class="table table-top-countries">
                                                            <tbody>
                                                                {Category}
                                                            </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="user-data m-b-30">
                                            <h3 className="title-3 m-b-30">
                                                <i className="zmdi zmdi-account-calendar"></i>user data</h3>
                                            <div className="filters m-b-45">
                                                Name                                        
                                                <div class="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
                                                    <select class="js-select2" name="property">
                                                        <option selected="selected">All Properties</option>
                                                        <option value="">Admin</option>
                                                        <option value="">Users</option>
                                                        <option value="">Members</option>
                                                    </select>
                                                    <div class="dropDownSelect2"></div>
                                                </div>
                                            </div>
                                            <div className="table-responsive table-data">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <td>
                                                                <label className="au-checkbox">
                                                                    <input type="checkbox"/>
                                                                    <span className="au-checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>name</td>
                                                            <td>role</td>
                                                            <td>type</td>
                                                            <td></td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label className="au-checkbox">
                                                                    <input type="checkbox"/>
                                                                    <span className="au-checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div className="table-data__info">
                                                                    <h6>lori lynch</h6>
                                                                    <span>
                                                                        <a href="#">johndoe@gmail.com</a>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="role admin">admin</span>
                                                            </td>
                                                            <td>
                                                                <div className="rs-select2--trans rs-select2--sm">
                                                                    <select className="js-select2" name="property">
                                                                        <option selected="selected">Full Control</option>
                                                                        <option value="">Post</option>
                                                                        <option value="">Watch</option>
                                                                    </select>
                                                                    <div className="dropDownSelect2"></div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="more">
                                                                    <i className="zmdi zmdi-more"></i>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label className="au-checkbox">
                                                                    <input type="checkbox" checked="checked"/>
                                                                    <span className="au-checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div className="table-data__info">
                                                                    <h6>lori lynch</h6>
                                                                    <span>
                                                                        <a href="#">johndoe@gmail.com</a>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="role user">user</span>
                                                            </td>
                                                            <td>
                                                                <div className="rs-select2--trans rs-select2--sm">
                                                                    <select className="js-select2" name="property">
                                                                        <option value="">Full Control</option>
                                                                        <option value="" selected="selected">Post</option>
                                                                        <option value="">Watch</option>
                                                                    </select>
                                                                    <div className="dropDownSelect2"></div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="more">
                                                                    <i className="zmdi zmdi-more"></i>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label className="au-checkbox">
                                                                    <input type="checkbox"/>
                                                                    <span className="au-checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div className="table-data__info">
                                                                    <h6>lori lynch</h6>
                                                                    <span>
                                                                        <a href="#">johndoe@gmail.com</a>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="role user">user</span>
                                                            </td>
                                                            <td>
                                                                <div className="rs-select2--trans rs-select2--sm">
                                                                    <select className="js-select2" name="property">
                                                                        <option value="">Full Control</option>
                                                                        <option value="" selected="selected">Post</option>
                                                                        <option value="">Watch</option>
                                                                    </select>
                                                                    <div className="dropDownSelect2"></div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="more">
                                                                    <i className="zmdi zmdi-more"></i>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label className="au-checkbox">
                                                                    <input type="checkbox"/>
                                                                    <span className="au-checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div className="table-data__info">
                                                                    <h6>lori lynch</h6>
                                                                    <span>
                                                                        <a href="#">johndoe@gmail.com</a>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="role member">member</span>
                                                            </td>
                                                            <td>
                                                                <div className="rs-select2--trans rs-select2--sm">
                                                                    <select className="js-select2" name="property">
                                                                        <option selected="selected">Full Control</option>
                                                                        <option value="">Post</option>
                                                                        <option value="">Watch</option>
                                                                    </select>
                                                                    <div className="dropDownSelect2"></div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="more">
                                                                    <i className="zmdi zmdi-more"></i>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="user-data__footer">
                                                <button className="au-btn au-btn-load">load more</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="title-5 m-b-35">Data Invoice</h3>
                                        <div className="table-responsive table--no-card m-b-30">
                                            <table className="table table-data2">
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
                                                    {cart}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="copyright">
                                            <p>Copyright © 2018</p>
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
export default Table;