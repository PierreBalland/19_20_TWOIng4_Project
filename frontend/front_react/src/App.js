import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar.js';
import DataCard from './DataCard.js';
import DataCard2 from './DataCard2.js';
import axios from "axios";


import Chart1 from './Chart1.js';
import Pcircle from "./ProgressCircle";
import Pie1 from './Pie.js';
import Navbar2 from "./Navbar2";
const _ =require('bootstrap');
const API_URL = "http://localhost:3000/mesures/5ddbaac6fc13ae4b49000001";
const API_URL1="http://localhost:3000/capteurs/location/bedroom";

const API_URL_bedroom="http://localhost:3000/capteurs/location/bedroom";
const API_URL_livingroom="http://localhost:3000/capteurs/location/livingroom";
const API_URL_entrance="http://localhost:3000/capteurs/location/entrance";
const API_URL_bathroom="http://localhost:3000/capteurs/location/bathroom";


class Rendufinale extends React.Component{

    callAPI () {
        // Call API
       // console.log("Bjr");
        axios
            .get(`${API_URL}`)
            .then(({data}) => {
               // console.log(data);
               // alert("pierrrrrrr");
                const main =data.type;
                alert(main);
               // alert("pierrrrrrr");
                document.getElementById('asideCard').innerHTML=main;
            })
            .catch(console.error);
   axios.get(`${API_URL1}`)
            .then(({data}) => {
                // console.log(data);
                // alert("pierrrrrrr");
                const main2 =data.length;
                alert(main2);
                // alert("pierrrrrrr");
            })
            .catch(console.error);
    }
    render() {
        return(
            <div className="main" id="main">
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12" id="nav2">
                        <Navbar2/>
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-lg-9">

                        <div id="mainCard">
                            <div className="row">
                                <Chart1/>
                            </div>

                            <div className="row">
                                <div className="col-lg-3">
                                    <Pie1/>
                                </div>
                                <div className="col-lg-4">
                                    <Pcircle/>
                                </div>
                                <div id ="datacard" className="col-lg-4">
                                     <DataCard/>
                                </div>
                                <div id ="datacard" className="col-lg-1">

                                </div>
                            </div>

                        </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="asideCard" className="card">
                                <article>
                                    Pollution par pays
                                    France: 37
                                    <div id="buttons">
                                        <button className="favorite styled"type="button" onClick={() => this.callAPI()}>Michael</button>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

            </div>

            </div>


        );
    }
}

export default Rendufinale;
