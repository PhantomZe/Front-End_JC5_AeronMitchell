import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


import HeaderM from './HeaderM';
import HeaderD from './HeaderD';

class Index extends Component
{
    render()
    {
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
                                            <h2 className="title-1">overview</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-t-25">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="overview-item overview-item--c1">
                                            <div className="overview__inner">
                                                <div className="overview-box clearfix">
                                                    <div className="icon">
                                                        <i className="zmdi zmdi-account-o"></i>
                                                    </div>
                                                    <div className="text">
                                                        <h2>10368</h2>
                                                        <span>members online</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="overview-item overview-item--c2">
                                            <div className="overview__inner">
                                                <div className="overview-box clearfix">
                                                    <div className="icon">
                                                        <i className="zmdi zmdi-shopping-cart"></i>
                                                    </div>
                                                    <div className="text">
                                                        <h2>388,688</h2>
                                                        <span>items solid</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="overview-item overview-item--c4">
                                            <div className="overview__inner">
                                                <div className="overview-box clearfix">
                                                    <div className="icon">
                                                        <i className="zmdi zmdi-money"></i>
                                                    </div>
                                                    <div className="text">
                                                        <h2>$1,060,38</h2>
                                                        <span>total earnings</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <h2 className="title-1 m-b-25">Invoice</h2>
                                        <div className="table-responsive table--no-card m-b-40">
                                            <table className="table table-borderless table-striped table-earning">
                                                <thead>
                                                    <tr>
                                                        <th>date</th>
                                                        <th>order ID</th>
                                                        <th>name</th>
                                                        <th>Location</th>
                                                        <th>No Telp</th>
                                                        <th className="text-right">price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2018-09-29</td>
                                                        <td>#1</td>
                                                        <td>Sayapah</td>
                                                        <td>Jl.Sawah Besar 5 no 11</td>
                                                        <td>082113331333</td>
                                                        <td className="text-right"><span>Rp.</span>200.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-28</td>
                                                        <td>#2</td>
                                                        <td>Sayapah</td>
                                                        <td>Jl.manggabesar 5 no 11</td>
                                                        <td>092722152127</td>
                                                        <td className="text-right"><span>Rp.</span>125.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-27</td>
                                                        <td>#3</td>
                                                        <td>Sayapah</td>
                                                        <td>Jl.manggabesar 5 no 11</td>
                                                        <td>082312312323</td>
                                                        <td className="text-right"><span>Rp.</span>150.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-26</td>
                                                        <td>#4</td>
                                                        <td>Kulo</td>
                                                        <td>Jl.manggabesar 7 no 11</td>
                                                        <td>092722152127</td>
                                                        <td className="text-right"><span>Rp.</span>75.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-25</td>
                                                        <td>#5</td>
                                                        <td>Apo</td>
                                                        <td>Jl.manggabesar 9 no 11</td>
                                                        <td>09272215237</td>
                                                        <td className="text-right"><span>Rp.</span>135.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-29</td>
                                                        <td>#6</td>
                                                        <td>Apo</td>
                                                        <td>Jl.manggabesar 9 no 11</td>
                                                        <td>09272215237</td>
                                                        <td className="text-right"><span>Rp.</span>75.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-24</td>
                                                        <td>#7</td>
                                                        <td>Apo</td>
                                                        <td>Jl.manggabesar 9 no 11</td>
                                                        <td>09272215237</td>
                                                        <td className="text-right"><span>Rp.</span>200.000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2018-09-22</td>
                                                        <td>#8</td>
                                                        <td>Apo</td>
                                                        <td>Jl.manggabesar 9 no 11</td>
                                                        <td>09272215237</td>
                                                        <td className="text-right"><span>Rp.</span>200.000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <h2 className="title-1 m-b-25">Category</h2>
                                        <div className="au-card au-card--bg-blue au-card-top-countries m-b-40">
                                            <div className="au-card-inner">
                                                <div className="table-responsive">
                                                    <table className="table table-top-countries">
                                                        <tbody>
                                                            <tr>
                                                                <td>Action</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Simulation</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Fantasy</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Horror</td>
                                                            </tr>
                                                            <tr>
                                                                <td>RPG</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Survival</td>
                                                            </tr>
                                                            <tr>
                                                                <td>War</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sport</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Strategy</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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
export default Index;