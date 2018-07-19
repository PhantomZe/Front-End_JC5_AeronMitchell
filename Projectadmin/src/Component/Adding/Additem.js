import React, { Component } from 'react';
import axios from 'axios';
import HeaderM2 from './../HeaderM2';
import HeaderD from './../HeaderD';

class Additem extends Component
{
    state=
    {
        IsiCategory:[],
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
    
    render()
    {
        const Category = this.state.IsiCategory.map(
            (isi, urutan) => 
            {
                var id= isi.id;
                var namacategory = isi.category;
                console.log(id)
                return <option key={urutan} value style={{textAlign: 'left'}}>
                {namacategory}
                </option>
            }
        );
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
                                                    <strong>New Game</strong>
                                                </div>
                                                <div className="card-body card-block">
                                                    <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
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
                                                                <input type="text" id="Name" name="name" placeholder="Name" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="Price" className=" form-control-label">Price</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="number" id="Price" name="Price" placeholder="Price" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinOs" className="form-control-label">Min Os</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinOs" name="MinOs" placeholder="MinOs" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinProcessor" className="form-control-label">Min Processor</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinProcessor" name="MinProcessor" placeholder="MinProcessor" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinMemory" className="form-control-label">Min Memory</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinMemory" name="MinMemory" placeholder="MinMemory" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MinGraphics" className="form-control-label">Min Graphics</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinGraphics" name="MinGraphics" placeholder="MinGraphics" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                    <label for="MinStorage" className="form-control-label">Min Storage</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MinStorage" name="MinStorage" placeholder="MinStorage" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxOs" className="form-control-label">Max Os</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxOs" name="MaxOs" placeholder="MaxOs" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxProcessor" className="form-control-label">Max Processor</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxProcessor" name="MaxProcessor" placeholder="MaxProcessor" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxMemory" className="form-control-label">Max Memory</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxMemory" name="MaxMemory" placeholder="MaxMemory" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="MaxGraphics" className="form-control-label">Max Graphics</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxGraphics" name="MaxGraphics" placeholder="MaxGraphics" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                    <label for="MaxStorage" className="form-control-label">Max Storage</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="MaxStorage" name="MaxStorage" placeholder="MaxStorage" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label for="file-input" className=" form-control-label">Category</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <div className="rs-select2--trans rs-select2--sm">
                                                                    <select className="js-select2" name="property">
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
export default Additem;