import React, { Component } from 'react';
import axios from 'axios';
import HeaderM2 from './../HeaderM2';
import HeaderD from './../HeaderD';
import {Redirect} from 'react-router-dom';

class AddCategory extends Component
{
    state =
    {
        signinres:'',
        redirect:false  
    }
    InsertCategory(obj)
    {
        var self=this;
        axios.post('http://localhost:3001/InsertCategory',
        {
            Category:obj.Category.value,
            desc1:obj.desc1.value,
            desc2:obj.desc2.value
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
                self.setState({signinres:'<=Sudah ada category tersebut'})
            }
        })
    }
    render()
    {
        console.log(this.props.location)
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
                                                    <strong>New Category</strong>
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
                                                                <input type="text" ref='Category' id="Name" name="name" placeholder="Name" className="form-control"/>{this.state.signinres}
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                                <div className="col col-md-3">
                                                                    <label for="textarea-input" className=" form-control-label">What is definition of your category</label>
                                                                </div>
                                                                <div className="col-12 col-md-9">
                                                                    <textarea name="textarea-input" ref='desc1' id="textarea-input" rows="9" placeholder="Definition" className="form-control"></textarea>
                                                                </div>
                                                        </div>
                                                        <div className="row form-group">
                                                                <div className="col col-md-3">
                                                                    <label for="textarea-input" className=" form-control-label">What do you do in that category?</label>
                                                                </div>
                                                                <div className="col-12 col-md-9">
                                                                    <textarea name="textarea-input" id="textarea-input" ref='desc2' rows="9" placeholder="something" className="form-control"></textarea>
                                                                </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" onClick={() => this.InsertCategory(this.refs)} className="btn btn-primary btn-sm">
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
export default AddCategory;