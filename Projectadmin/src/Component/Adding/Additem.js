import React, { Component } from 'react';
import axios from 'axios';
import HeaderM from './../HeaderM';
import HeaderD from './../HeaderD';
import {Redirect} from 'react-router-dom';

class Additem extends Component
{
    state=
    {
        IsiCategory:[],
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
        insertres:''
    }
    componentDidMount()
    {
        axios.get(`http://localhost:3001/IsiCategory`).then(
            /** Disini fungsi */
            (ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    IsiCategory: ambilData.data
                });
            }
        )
    }
    UpCategory = (obj) => 
    {
        this.setState({
            idCategory:obj.target.value,
        })
    }
    onchange = (e) => {
        switch(e.target.name){
            case 'fotoproduk':
                this.setState({
                    Picture: e.target.files[0],
                });
                break;
        }
      }
    value =(obj) =>
    {
        this.setState({
            Name:obj.Name.value,
            Price:obj.Price.value,
            MinOs:obj.MinOs.value,MaxOs:obj.MaxOs.value,
            MinGraphics:obj.MinGraphics.value,MaxGraphics:obj.MaxGraphics.value,
            MinMemory:obj.MinMemory.value,MaxMemory:obj.MaxMemory.value,
            MinProcessor:obj.MinProcessor.value,MaxProcessor:obj.MaxProcessor.value,
            MinStorage:obj.MinStorage.value,MaxStorage:obj.MaxStorage.value
        })
    }
    updateData=(e)=>{
        var self=this
        e.preventDefault();
        let formData = new FormData();
        formData.append('file',self.state.Picture);
        formData.append('Name',self.state.Name);
        formData.append('Price',self.state.Price);
        formData.append('MinOs',self.state.MinOs);
        formData.append('MaxOs',self.state.MaxOs);
        formData.append('MinGraphics',self.state.MinGraphics);
        formData.append('MaxGraphics',self.state.MaxGraphics);
        formData.append('MinProcessor',self.state.MinProcessor);
        formData.append('MaxProcessor',self.state.MaxProcessor);
        formData.append('MinMemory',self.state.MinMemory);
        formData.append('MaxMemory',self.state.MaxMemory);
        formData.append('MinStorage',self.state.MinStorage);
        formData.append('MaxStorage',self.state.MaxStorage);
        formData.append('idCategory',self.state.idCategory);
        axios.post('http://localhost:3001/AddProduk/', formData)
        .then(function(response)
        {
            if(response.data==1)
            {
                self.setState({redirect:true})
            }        
            else
            {
                self.setState({insertres:response.data})
            }
        })
      }
    render()
    {
        if(this.state.redirect)
        {
            return <Redirect to='/Table'/>
        }
        const Category = this.state.IsiCategory.map(
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
                                                </div>
                                                <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
                                                <div className="card-body card-block">
                                                        <div className="row form-group">
                                                            <div class="col col-md-3">
                                                                <label class=" form-control-label">Static</label>
                                                            </div>
                                                            <div class="col-12 col-md-9">
                                                                <p className="form-control-static">Content</p>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="Name" className=" form-control-label">Game Name</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="Name" name="name" ref='Name' placeholder="Name" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="Price" className=" form-control-label">Price</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="number" id="Price" name="Price" ref='Price' placeholder="Price" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinOs" className="form-control-label">Min Os</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinOs" name="MinOs" ref='MinOs' placeholder="MinOs" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinProcessor" className="form-control-label">Min Processor</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinProcessor" name="MinProcessor" ref='MinProcessor' placeholder="MinProcessor" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinMemory" className="form-control-label">Min Memory</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinMemory" name="MinMemory" ref='MinMemory' placeholder="MinMemory" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinGraphics" className="form-control-label">Min Graphics</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinGraphics" name="MinGraphics" ref='MinGraphics' placeholder="MinGraphics" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                    <label for="MinStorage" className="form-control-label">Min Storage</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinStorage" ref='MinStorage' name="MinStorage" placeholder="MinStorage" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxOs" className="form-control-label">Max Os</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxOs" name="MaxOs" ref='MaxOs' placeholder="MaxOs" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxProcessor" className="form-control-label">Max Processor</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxProcessor" name="MaxProcessor" ref='MaxProcessor' placeholder="MaxProcessor" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxMemory" className="form-control-label">Max Memory</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxMemory" name="MaxMemory" placeholder="MaxMemory" ref='MaxMemory' className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxGraphics" className="form-control-label">Max Graphics</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxGraphics" name="MaxGraphics" placeholder="MaxGraphics" ref='MaxGraphics' className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                    <label for="MaxStorage" className="form-control-label">Max Storage</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxStorage" name="MaxStorage" placeholder="MaxStorage" ref='MaxStorage' className="form-control"/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="file-input" className=" form-control-label">Category</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <div className="rs-select2--trans rs-select2--sm">
                                                                    <select onChange={this.UpCategory} className="js-select2" >
                                                                    <option selected='selected'>Category</option>
                                                                        {Category}
                                                                    </select>
                                                                    <div className="dropDownSelect2"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="file-multiple-input" className=" form-control-label">Picture input</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="file" id="file-input" name="fotoproduk" onChange={this.onchange} className="form-control-file"/>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary btn-sm">
                                                        <i className="fa fa-dot-circle-o"></i> Submit
                                                    </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban"></i> Reset
                                                    </button>
                                                </div>
                                                </form>
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
export default Additem;