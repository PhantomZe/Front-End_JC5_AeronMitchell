import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';




class Data1 extends Component 
{
    render()
    {
        return(
            <div id="isi1">
                <h4>Nama:</h4><input className="form-control" type="text" id="nama" placeholder="Nama"/>
                <hr/>
                <h4>Email:</h4><input className="form-control" type="email" id="E-mail" placeholder="e-mail"/>
                <hr/>
                <h4>Tgl lahir:</h4>Tahun<input className="tgl" type="number" min="1900" id="thn" placeholder="Thn" />Bulan<input type="number" className="tgl" id="tgl2" min="1" placeholder="Bln" max="12" id="bln"/> Tanggal<input type="number" placeholder="Tgl" className="tgl" id="tgl2" min="1" max="31"/>
            </div>
        );
    }
}
export default Data1;