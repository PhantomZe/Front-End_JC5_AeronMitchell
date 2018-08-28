import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import IndexH from './Component/Index';
import Table from './Component/Table';
import Additem from './Component/Adding/Additem';
import AddCategory from './Component/Adding/AddCategory';
import EditProduct from './Component/Adding/Edit';
import EditCategory from './Component/Adding/EditCategory';

import Login from './Component/Login';
// import ForgotPass from './Component/ForgotPass';
import DetailInvoice from'./Component/Adding/DetailInvoice';



class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={IndexH}/>

        <Route path="/Login" component={Login}/>
        {/* <Route path="/ForgotPass" component={ForgotPass}/> */}
        
        <Route path="/Table" component={Table}/>
          <Route path="/Edit" component={EditProduct}/>
          <Route path="/EditCategory" component={EditCategory}/>
          <Route path="/Additem" component={Additem}/>
          <Route path="/AddCategory" component={AddCategory}/>
          <Route path='/DetailInvoice' component={DetailInvoice}/>
      </div>
    );
  }
}

export default App;
