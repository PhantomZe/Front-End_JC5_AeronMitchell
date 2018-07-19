import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// Mengirim funtion yang dapat dari redux
function mapStateToProps(state) {
  return {
      masuk:state.userid
    };
}


class masuk extends Component {
  state = {
    redirect: false
  }

  render() {
    // Mengecek apakah passwod sudah dan username uda benar?
  if((this.props.masuk) != 0){
    {this.state.redirect= true}  
  }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }
  

    return (
      <div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(masuk)