import React, { Component } from 'react';
import axios from 'axios';
import HeaderM2 from './../HeaderM2';
import HeaderD from './../HeaderD';
import {Redirect} from 'react-router-dom';

class EditCategory extends Component
{
    state =
    {
        Category:'',
        desc1:'',
        desc2:'',
        redirect:false,
        id:''
    }
    
    componentDidMount()
    {

        var id=this.props.location.state.id
        axios.get(`http://localhost:3001/EditCategory/`+id).then(
            (ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    Category: ambilData.data[0].category,
                    desc1: ambilData.data[0].description1,
                    desc2:ambilData.data[0].description2,
                    id:ambilData.data[0].id
                });
            }
        )
    }
    EditCategory(obj)
    {
        var self=this;
        axios.post('http://localhost:3001/EditCategory',
        {
            Category:obj.Category.value,
            desc1:obj.desc1.value,
            desc2:obj.desc2.value,
            id:this.state.id
        })
        .then(function(response)
        {
            var D=response.data;
            if(D == 1)
            {
                self.setState({redirect:true})
            }
            else
            {
                self.setState({signinres:'Tidak boleh ada yang kosong'})
            }
        })
    }
    handleChange = (event) => 
    {
        switch(event.target.name)
        {
            case 'desc1':
            this.setState
            (
                {
                    desc1:event.target.value
                }
            );
            break;
            case 'desc2':
            this.setState
            (
                {
                    desc2:event.target.value
                }
            );
            break;

        }
    }
    render()
    {
        if(this.state.redirect)
        {
            return <Redirect to='/Table'/>
        }
        return(
            <div className="page-wrapper">
                <HeaderM2 />
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
                                                    <strong>Edit Category</strong>
                                                </div>
                                                <div className="card-body card-block">
                                                    <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label className=" form-control-label">Static</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <p className="form-control-static">Content</p>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="Name" className=" form-control-label">Category Name</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" ref='Category' id="Name" name="name" placeholder="Name" onChange={this.onTextChange} Value={this.state.Category} className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                                <div className="col col-md-3">
                                                                    <label for="textarea-input" className=" form-control-label">What is definition of your category</label>
                                                                </div>
                                                                <div className="col-12 col-md-9">
                                                                    <textarea name="desc1" ref='desc1' id="textarea-input" rows="9" value={this.state.desc1} onChange={this.handleChange} placeholder="Definition" className="form-control"></textarea>
                                                                </div>
                                                        </div>
                                                        <div className="row form-group">
                                                                <div className="col col-md-3">
                                                                    <label for="textarea-input" className=" form-control-label">What do you do in that category?</label>
                                                                </div>
                                                                <div className="col-12 col-md-9">
                                                                    <textarea name="desc2" id="textarea-input" ref='desc2' rows="9" value={this.state.desc2} onChange={this.handleChange} placeholder="something" className="form-control">{this.state.desc2}</textarea>
                                                                </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                {this.state.signinres}<br/>
                                                    <button type="submit" onClick={() => this.EditCategory(this.refs)} className="btn btn-primary btn-sm">
                                                        <i className="fa fa-dot-circle-o"></i> Submit
                                                    </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban"></i> Reset
                                                    </button>
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
export default EditCategory;