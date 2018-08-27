import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';


//import Act1 from './img/Fallout.jpg';
import Sim1 from './img/2.jpg';
import Horror1 from './img/hororr.jpg';
import Fantasy1 from './img/Fantasy1.jpg';
import RPG1 from './img/FNT.jpg';
import Sur1 from './img/mine.jpg';
import Sport1 from './img/fifa.jpg';
import Strategy from './img/xcom.jpg';


class AllProduct extends Component
{
    state=
    {
        IsiCategory:[],
        IsiProduk:[],
        idCategory:0,
        redirect:false,
        alert:false,
        StockAbis:false,
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
    }
    AddCart = (obj) =>
    {
        var self=this;
        console.log(obj)
        if(obj.userid == 0)
        {
            this.setState({
                redirect: true
            });
        }
        else
        {
            if(obj.Stock >= 1)
            {
                axios.post(`http://localhost:3001/Cart/0`,
                {
                    userid:obj.userid,
                    productid:obj.id,
                    harga:obj.harga,
                    jumlah:1
                }).then(function(response)
                {
                    if(response.data == '1')
                    {
                        self.setState({alert:true})
                    }        
                })
            }
            else
            {
                self.setState({StockAbis:true})
            }
        }
    }
    render()
    {
        if(this.state.alert)
        {
            alert('Cart berhasil')
        }
        if(this.state.StockAbis)
        {
            alert('Stock Abis')
        }
        if(this.state.redirect)
        {
            return <Redirect to='/Login'/>
        }
        const Produk = this.state.IsiProduk.map(
            (isi, urutan) => 
            {
                var id= isi.id;
                var namaProduk = isi.product_name;
                var Category = isi.category;
                var harga = isi.harga;
                var image = isi.image +'.jpeg';
                var idCategory = isi.category_id;
                var Stock=isi.stock
                return <tr key={urutan} style={{textAlign: 'left'}}>
                <td>{urutan+1}</td>
                <td>
                <Link to={{pathname:'/Detail',state:{id:id,Stock:Stock}}}>{namaProduk}</Link>
                </td>
                <td className="desc">{Category}</td>
                <td className="text-right">{harga}</td>
                <td><img className="img-thumbnail" src={'http://localhost:3001/images/'+image}/></td>
                <td>{Stock}</td>
                <td className="text-right">    
                    <div className="table-data-feature">
                        <button  onClick={() => this.AddCart({id:id,harga:harga,userid:this.props.userid,Stock:Stock})} className="btn btn-success" >
                            Add To Cart
                        </button>
                    </div>
                </td>
            </tr>
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
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 IsiH" id="isi">
                    <p className="Judul">
                        List Game:
                    </p>
                    <hr/>
                    <div className="col-xs-12 col-sm-12-col-md-12 row" id="Prof">
                        <div className="panel-group" id="lin_Accor">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title" data-target="#panel-1"
                                    data-toggle="collapse"
                                    data-parent="#lin_Accor">List Game</h3>
                                </div>
                                <div className="panel-body table-responsive table--no-card m-b-30">
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
                                    <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>Category</th>
                                                <th  className="text-right">Harga</th>
                                                <th  className="text-right">Stock</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {Produk}
                                            </tbody>
                                    </table>  
                            </div>
                        <hr/>
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
export default connect(mapStateToProps)(AllProduct)