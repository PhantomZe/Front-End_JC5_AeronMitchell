import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from './../Header';
import Footer from './../Footer';


class Detail extends Component
{
    state=
    {
        idCategory:0,
        Name:'',
        Price:0,
        MinOs:'',MaxOs:'',
        MinProcessor:'',MaxProcessor:'',
        MinMemory:'',MaxMemory:'',
        MinGraphics:'',MaxGraphics:'',
        MinStorage:'',MaxStorage:'',
        Picture:'',
        redirect:false,
        insertres:'',
        images:'',
    }
    componentDidMount()
    {
        axios.get(`http://localhost:3001/Produk/`+this.props.location.state.id).then(
            /** Disini fungsi */
            (obj) => {
                this.setState({
                    Name:obj.data[0].product_name,
                    images:obj.data[0].image,
                    Price:obj.data[0].harga,
                    MinOs:obj.data[0].min_os,MaxOs:obj.data[0].max_os,
                    MinGraphics:obj.data[0].min_graphic,MaxGraphics:obj.data[0].max_graphic,
                    MinMemory:obj.data[0].min_memory,MaxMemory:obj.data[0].max_memory,
                    MinProcessor:obj.data[0].min_processor,MaxProcessor:obj.data[0].max_processor,
                    MinStorage:obj.data[0].min_storage,MaxStorage:obj.data[0].max_storage,
                    idCategory:obj.data[0].category_id,images:obj.data[0].image
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
    }
    render()
    {
        if(this.state.alert)
        {
            alert('Cart berhasil')
        }
        if(this.state.redirect)
        {
            return <Redirect to='/Login'/>
        }
        return(
        <div>
            <Header />
            <div className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8 IsiH" id="isi">
                <p className="Judul">
                    {this.state.Name}
                </p>
                <hr/>
                <div className="GambarProd">
                    <img src={'http://localhost:3001/images/'+this.state.images+'.jpeg'} className="img-thumbnail" id="GambarP"/> 
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
                            <gr>OS:</gr>{this.state.MinOs}
                            <br/>
                            <gr>Processor:</gr>{this.state.MinProcessor}
                            <br/>
                            <gr>Memory:</gr>{this.state.MinMemory}
                            <br/>
                            <gr>Graphics:</gr>{this.state.MinGraphics}
                            <br/>
                            <gr>Storage:</gr>{this.state.MinStorage}
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <p className="MinMax">
                                Maximum:
                            </p>
                            Requires a 64-bit processor and operating system
                            <br/>
                            <gr>OS:</gr>{this.state.MaxOs}
                            <br/>
                            <gr>Processor:</gr>{this.state.MaxProcessor}
                            <br/>
                            <gr>Memory:</gr>{this.state.MaxMemory}
                            <br/>
                            <gr>Graphics:</gr>{this.state.MaxGraphics}
                            <br/>
                            <gr>Storage:</gr>{this.state.MaxStorage}
                        </div>
                    </div>
                </div>
                <div className="GambarProd" style={{backgroundColor:'lightblue'}}>
                     <div className="col-xs-12 col-sm-12 col-md-12 row">
                        <div className="col-xs-8 col-sm-8 col-md-8" style={{border:'solid'}}>
                            <h2>Rp.{this.state.Price}</h2>
                         </div>
                        <div className="col-xs-4 col-sm-4 col-md-4" style={{Position:'relative', top:'25%'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <button  onClick={() => this.AddCart({id:this.props.location.state.id,harga:this.state.Price,userid:this.props.userid})} className="btn btn-success" >
                                    Add To Cart
                                </button>
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
export default connect(mapStateToProps)(Detail);