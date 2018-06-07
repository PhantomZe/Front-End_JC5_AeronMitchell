import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';




class Data2 extends Component 
{
    render()
    {
        return(
            <div id="isi2">
                <h4>Alamat:</h4><input type="text" className="form-control" id="alamat" placeholder="alamat"/>
                <hr/>
                <h4>Gender:</h4><br/><input type="radio" value="Man" name="gender" checked/>Man<input type="radio" name="gender" value="Woman"/>   Woman
                <hr/>
                <h4>Hobbies:</h4><input type="text" className="form-control" id="Hobby" placeholder="Hobby"/>
            </div>
        );
    }
}
export default Data2;