import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import HeaderM2 from './../HeaderM2';
import HeaderD from './../HeaderD';

class Edit extends Component
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
                                                    <strong>Edit Game</strong>
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
                                                                <label for="Name" className=" form-control-label">Game Name</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="Name" name="name" placeholder="Name" value="Fallout 4" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="Price" className=" form-control-label">Price</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="number" id="Price" name="Price" placeholder="Price" value="200000" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="selectSm" className=" form-control-label">Type</label>
                                                            </div>
                                                            <div className="col col-md-9">
                                                                <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                                                                    <option value="">Properties</option>
                                                                    <option value="Action" selected="selected">Action</option>
                                                                    <option value="Simulation">Simulation</option>
                                                                    <option value="Fantasy">Fantasy</option>
                                                                    <option value="RPG">RPG</option>
                                                                    <option value="War">War</option>
                                                                    <option value="Strategy">Strategy</option>
                                                                    <option value="Survival">Survival</option>
                                                                    <option value="Horror">Horror</option>
                                                                    <option value="Sport">Sport</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinOs" className="form-control-label">Min Os</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinOs" value="Windows 7/8/10 (64-bit OS required)" name="MinOs" placeholder="MinOs" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinProcessor" className="form-control-label">Min Processor</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" value="Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent " id="MinProcessor" name="MinProcessor" placeholder="MinProcessor" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinMemory" className="form-control-label">Min Memory</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" value="8 GB RAM " id="MinMemory" name="MinMemory" placeholder="MinMemory" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinGraphics" className="form-control-label">Min Graphics</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinGraphics" value="NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent " name="MinGraphics" placeholder="MinGraphics" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                    <label for="MinStorage" className="form-control-label">Min Storage</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinStorage" value="30 GB available space" name="MinStorage" placeholder="MinStorage" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxOs" className="form-control-label">Max Os</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxOs" value="Windows 7/8/10 (64-bit OS required) " name="MaxOs" placeholder="MaxOs" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxProcessor" className="form-control-label">Max Processor</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxProcessor" value=" Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent" name="MaxProcessor" placeholder="MaxProcessor" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxMemory" className="form-control-label">Max Memory</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxMemory" value="8 GB RAM " name="MaxMemory" placeholder="MaxMemory" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxGraphics" className="form-control-label">Max Graphics</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxGraphics" name="MaxGraphics" value="NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent " placeholder="MaxGraphics" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                    <label for="MaxStorage" className="form-control-label">Max Storage</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxStorage" name="MaxStorage" value="30 GB available space" placeholder="MaxStorage" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="file-input" className=" form-control-label">Video input</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="file" id="file-input" name="file-input" className="form-control-file"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="file-multiple-input" className=" form-control-label">Picture input</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="file" id="file-input" name="file-input" className="form-control-file"/>
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
export default Edit;