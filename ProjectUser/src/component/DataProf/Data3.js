import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';




class Data3 extends Component 
{
    render()
    {
        return(
            <div id="isi3">
                <h3>Change Password</h3>
                <hr/>
                <h4>Current Password:</h4><input type="password" id="Password"  minlength="8" maxlength="15"/>
                <hr/>
                <h4>Change Password:</h4><input type="password" id="Password"  minlength="8" maxlength="15"/>
                <hr/>
                <h4>Confirm Password:</h4><input type="password" id="Password"  minlength="8" maxlength="15"/>
                <hr/>
            </div>
        );
    }
}
export default Data3;