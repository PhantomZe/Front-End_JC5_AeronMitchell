import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Link, Route } from 'react-router-dom';



import Header from './component/Header';
import Footer from './component/Footer';


import Home from './component/Home';


import Profile from './component/Profile';
  import Invoice1 from './component/DataProf/Invoice1' 


import Cart from './component/Cart';


import AllProduct from './component/AllProduct';



import Action from './component/IsiCategory/Action';
import Simulation from './component/IsiCategory/Simulation';
import Fantasy from './component/IsiCategory/Fantasy';
import Horror from './component/IsiCategory/Horror';
import Survival from './component/IsiCategory/Survival';
import Strategy from './component/IsiCategory/Strategy';
import War from './component/IsiCategory/War';
import Sport from './component/IsiCategory/Sport';
import RPG from './component/IsiCategory/RPG';



import style from './Style/Header.css';


class Pusat extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Profile" component={Profile}/>
            <Route path="/Invoice1" component={Invoice1}/>
          <Route path="/Cart" component={Cart}/>
          <Route path="/AllProduct" component={AllProduct}/>
            <Route path="/Action" component={Action}/>
            <Route path="/Simulation" component={Simulation}/>
            <Route path="/RPG" component={RPG}/>
            <Route path="/Fantasy" component={Fantasy}/>
            <Route path="/Strategy" component={Strategy}/>
            <Route path="/War" component={War}/>
            <Route path="/Horror" component={Horror}/>
            <Route path="/Sport" component={Sport}/>
            <Route path="/Survival" component={Survival}/>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Pusat;
