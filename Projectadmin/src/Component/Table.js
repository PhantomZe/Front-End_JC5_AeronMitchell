import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import HeaderM1 from './HeaderM1';
import HeaderD from './HeaderD';


class Table extends Component
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
                return <tr key={urutan} style={{textAlign: 'left'}}>
                <td>
                <Link to={{pathname:'/EditCategory',state:{id:id}}}><h4>{namacategory}</h4></Link>&nbsp;
                </td>
                <td>    
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            }
        );
        return(
            <div className="page-wrapper">
                <HeaderM1 />
                <div className="page-container">
                    <HeaderD />
                    <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="overview-wrap">
                                            <h2 className="title-1">Earning By Games</h2>
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
                                        <div className="table-responsive table--no-card m-b-30">
                                            <table className="table table-borderless table-striped table-earning">
                                                <thead>
                                                    <tr>
                                                        <th>date</th>
                                                        <th>order</th>
                                                        <th>name</th>
                                                        <th className="text-right">price</th>
                                                        <th className="text-right">quantity</th>
                                                        <th className="text-right">total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2018-09-29</td>
                                                        <td>1</td>
                                                        <td>Fallout4</td>
                                                        <td className="text-right">Rp.200.000,00</td>
                                                        <td className="text-right">5</td>
                                                        <td className="text-right">Rp.1.000.000,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-28</td>
                                                        <td>2</td>
                                                        <td>StarDewValley</td>
                                                        <td className="text-right">Rp.125.000,00</td>
                                                        <td className="text-right">4</td>
                                                        <td className="text-right">Rp.500.000,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-27</td>
                                                        <td>3</td>
                                                        <td>Resident Evil BioHazard</td>
                                                        <td className="text-right">Rp.150.000,00</td>
                                                        <td className="text-right">3</td>
                                                        <td className="text-right">Rp.450.000,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-26</td>
                                                        <td>4</td>
                                                        <td>BattleLore</td>
                                                        <td className="text-right">Rp.75.000,00</td>
                                                        <td className="text-right">3</td>
                                                        <td className="text-right">Rp.225.000,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-25</td>
                                                        <td>5</td>
                                                        <td>FFXII</td>
                                                        <td className="text-right">Rp.135.000,00</td>
                                                        <td className="text-right">2</td>
                                                        <td className="text-right">Rp.270.000,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-29</td>
                                                        <td>6</td>
                                                        <td>Minecraft</td>
                                                        <td className="text-right">Rp.150.000,00</td>
                                                        <td className="text-right">2</td>
                                                        <td className="text-right">Rp.450.000,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-24</td>
                                                        <td>7</td>
                                                        <td>Fifa 13</td>
                                                        <td className="text-right">Rp.200.000,00</td>
                                                        <td className="text-right">1</td>
                                                        <td className="text-right">Rp.200.000,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-22</td>
                                                        <td>8</td>
                                                        <td>Xcom2</td>
                                                        <td className="text-right">Rp.200.000,00</td>
                                                        <td className="text-right">1</td>
                                                        <td className="text-right">Rp.200.000,00</td>
                                                    </tr>
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
                                        <h3 className="title-5 m-b-35">data table</h3>
                                        <div className="table-data__tool">
                                            <div className="table-data__tool-left">
                                                <div className="rs-select2--light rs-select2--md">
                                                    <select className="js-select2" name="property">
                                                        <option selected="selected">All Properties</option>
                                                        <option value="" id="PiAction">Action</option>
                                                        <option value="" id="PiSimulation">Simulation</option>
                                                        <option value="" id="PiHorror">Horror</option>
                                                        <option value="" id="PiSurvival">Survival</option>
                                                        <option value="" id="PiFantasy">Fantasy</option>
                                                        <option value="" id="PiRPG">RPG</option>
                                                        <option value="" id="PiStrategy">Strategy</option>
                                                        <option value="" id="PiWar">War</option>
                                                        <option value="" id="PiSport">Sport</option>
                                                    </select>
                                                    <div className="dropDownSelect2"></div>
                                                </div>
                                            </div>
                                            <div className="table-data__tool-right">
                                                <a href="#"><button className="au-btn au-btn-icon au-btn--green au-btn--small">
                                                <Link to="/Additem"><i className="zmdi zmdi-plus"></i>add item</Link></button></a>
                                                <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                                    <select className="js-select2" name="type">
                                                        <option selected="selected">Export</option>
                                                        <option value="">Delete</option>
                                                        <option value="">Disabled</option>
                                                    </select>
                                                    <div className="dropDownSelect2"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive table-responsive-data2">
                                            <table className="table table-data2">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </th>
                                                        <th>name</th>
                                                        <th>description</th>
                                                        <th>date</th>
                                                        <th>status</th>
                                                        <th>price</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="tr-shadow" id="Action">
                                                        <td>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>Fallout 4</td>
                                                        <td className="desc">Action</td>
                                                        <td>2018-05-14</td>
                                                        <td>
                                                            <span className="status--process">Processed</span>
                                                        </td>
                                                        <td>Rp.200.000,00</td>
                                                        <td>
                                                            <div className="table-data-feature">
                                                                <Link to="/Edit"><a href="Edit.html"><button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </button></a>
                                                                </Link>
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                                    <i className="zmdi zmdi-delete"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="spacer" id="Simulation"></tr>
                                                    <tr className="tr-shadow" id="Simulation">
                                                        <td>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>StarDewValley</td>
                                                        <td className="desc">Simulation</td>
                                                        <td>2018-09-29</td>
                                                        <td>
                                                            <span className="status--process">Processed</span>
                                                        </td>
                                                        <td>$999.00</td>
                                                        <td>
                                                            <div className="table-data-feature">
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </button>
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                                    <i className="zmdi zmdi-delete"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="spacer" id="War"></tr>
                                                    <tr className="tr-shadow" id="War">
                                                        <td>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>Dysnaty Warrior</td>
                                                        <td className="desc">War</td>
                                                        <td>2018-09-25</td>
                                                        <td>
                                                            <span className="status--denied">Denied</span>
                                                        </td>
                                                        <td>$1199.00</td>
                                                        <td>
                                                            <div className="table-data-feature">
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </button>
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                                    <i className="zmdi zmdi-delete"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="spacer" id="Horror"></tr>
                                                    <tr className="tr-shadow" id="Horror">
                                                        <td>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>Resident Evil BioHazard</td>
                                                        <td className="desc">Horror</td>
                                                        <td>2018-09-24</td>
                                                        <td>
                                                            <span className="status--process">Processed</span>
                                                        </td>
                                                        <td>$699.00</td>
                                                        <td>
                                                            <div className="table-data-feature">
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </button>
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                                    <i className="zmdi zmdi-delete"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="spacer" id="Fantasy"></tr>
                                                    <tr className="tr-shadow" id="Fantasy">
                                                        <td>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>BattleLore</td>
                                                        <td className="desc">Fantasy</td>
                                                        <td>2018-09-24</td>
                                                        <td>
                                                            <span className="status--process">Processed</span>
                                                        </td>
                                                        <td>Rp.75.000,00</td>
                                                        <td>
                                                            <div className="table-data-feature">
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </button>
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                                    <i className="zmdi zmdi-delete"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="spacer" id="RPG"></tr>
                                                    <tr className="tr-shadow" id="RPG">
                                                        <td>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>FFXII</td>
                                                        <td className="desc">RPG</td>
                                                        <td>2018-09-24</td>
                                                        <td>
                                                            <span className="status--process">Processed</span>
                                                        </td>
                                                        <td>Rp.135.000,00</td>
                                                        <td>
                                                            <div className="table-data-feature">
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </button>
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                                    <i className="zmdi zmdi-delete"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="spacer" id="Survival"></tr>
                                                    <tr className="tr-shadow" id="Survival">
                                                        <td>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>Minecraft</td>
                                                        <td className="desc">Survival</td>
                                                        <td>2018-09-24</td>
                                                        <td>
                                                            <span className="status--process">Processed</span>
                                                        </td>
                                                        <td>Rp.75.000,00</td>
                                                        <td>
                                                            <div className="table-data-feature">
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </button>
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                                    <i className="zmdi zmdi-delete"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="spacer" id="Sport"></tr>
                                                    <tr className="tr-shadow" id="Sport">
                                                        <td>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>Fifa 13</td>
                                                        <td className="desc">Sport</td>
                                                        <td>2018-09-24</td>
                                                        <td>
                                                            <span className="status--process">Processed</span>
                                                        </td>
                                                        <td>RP.200.000,00</td>
                                                        <td>
                                                            <div className="table-data-feature">
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </button>
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                                    <i className="zmdi zmdi-delete"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="spacer" id="Strategy"></tr>
                                                    <tr className="tr-shadow" id="Strategy">
                                                        <td>
                                                            <label className="au-checkbox">
                                                                <input type="checkbox"/>
                                                                <span className="au-checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td>Xcom2</td>
                                                        <td className="desc">Strategy</td>
                                                        <td>2018-09-24</td>
                                                        <td>
                                                            <span className="status--process">Processed</span>
                                                        </td>
                                                        <td>Rp.200.000,00</td>
                                                        <td>
                                                            <div className="table-data-feature">
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                                    <i className="zmdi zmdi-edit"></i>
                                                                </button>
                                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                                    <i className="zmdi zmdi-delete"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
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