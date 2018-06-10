import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import HeaderM2 from './../HeaderM2';
import HeaderD from './../HeaderD';

class AddCategory extends Component
{
    render()
    {
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
                                                                <label for="Name" className=" form-control-label">category Name</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="Name" name="name" placeholder="Name" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                                <div className="col col-md-3">
                                                                    <label for="textarea-input" className=" form-control-label">What is definition of your category</label>
                                                                </div>
                                                                <div className="col-12 col-md-9">
                                                                    <textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Definition" className="form-control"></textarea>
                                                                </div>
                                                        </div>
                                                        <div className="row form-group">
                                                                <div className="col col-md-3">
                                                                    <label for="textarea-input" className=" form-control-label">What do you do in that category?</label>
                                                                </div>
                                                                <div className="col-12 col-md-9">
                                                                    <textarea name="textarea-input" id="textarea-input" rows="9" placeholder="something" className="form-control"></textarea>
                                                                </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary btn-sm">
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