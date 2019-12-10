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
const API_URLtemp = "http://localhost:3000/mesures/tipe/temperature";
const API_URLhumid = "http://localhost:3000/mesures/tipe/humidity";
const API_URLpollu = "http://localhost:3000/mesures/tipe/airPollution";

const API_URL1="http://localhost:3000/capteurs/location/bedroom";
const  API_URL2 ="http://localhost:3000/utilisateurs/";
const DEFAULT_STATE = { name: 'accueil'};

    class Rendufinale extends React.Component{
    constructor(){
        super();
        this.state=DEFAULT_STATE;
    }

    async componentWillMount () {
        // Call API

       await axios
            .get(`${API_URLtemp}`)
            .then(({data}) => {
               // console.log(data);
              // alert("pierrrrrrr");
                const main =data.length;
              // alert(main);
               // alert("pierrrrrrr");
                document.getElementById('asideCard1').innerHTML=main;
            })
            .catch(console.error);
   await axios.get(`${API_URLpollu}`)
            .then(({data}) => {
                // console.log(data);
                // alert("pierrrrrrr");
                const main2 =data.length;
               // alert(main2);
                document.getElementById('asideCard2').innerHTML=main2;
            })
            .catch(console.error);
       await axios.get(`${API_URLhumid}`)
            .then(({data}) => {
                // console.log(data);
                // alert("pierrrrrrr");
                const main3 =data.length;
               // alert(main3);
                document.getElementById('asideCard3').innerHTML=main3;
            })
            .catch(console.error);
    }

    handleclickcapteurs(){

        const DEFAULT_STATE2={name: 'capteurs'};
        this.setState(DEFAULT_STATE2);
    }
        handleclickadmin(){

            const DEFAULT_STATE3={name: 'admin'};
            this.setState(DEFAULT_STATE3);
        }
        handleclickaccueil(){

            const DEFAULT_STATE4={name: 'accueil'};
            this.setState(DEFAULT_STATE4);
            this.componentWillMount();
        }
        add(){
        const user_location=document.getElementById('location').value;

        const user_nb=document.getElementById('nbpers').value;

        const size=document.getElementById('size').value;

            axios
                .put(`${API_URL2}`,{
                    location : user_location,
                    personsInHouse : user_nb,
                    houseSize : size
                }).catch(console.error);
        }
    render() {

        if(this.state.name=='accueil') {

            return (
                <div className="main" id="main">
                    <Navbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12" id="nav2">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-3  col-sm-3 d-none d-lg-block">

                                        </div>
                                        <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                            <div id="home"><button id="str" >Accueil</button> </div>
                                        </div>
                                        <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                            <div id="home"><button id="str" onClick={() => this.handleclickcapteurs()}>Nos capteurs</button> </div>
                                        </div>
                                        <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                            <div id="home"><button id="str" onClick={() => this.handleclickadmin()}>Admin</button> </div>
                                        </div>
                                        <div className="col-lg-3  col-sm-3 d-none d-lg-block">

                                        </div>

                                    </div>
                                </div>
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
                                        <div id="datacard" className="col-lg-4">
                                            <DataCard/>
                                        </div>
                                        <div id="datacard" className="col-lg-1">

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div id="asideCard" className="card">
                                    Combien de mesures nos capteurs font elles dans le monde ?
                                    <div> Temperature : </div>
                                    <article id="asideCard1">
                                    </article>
                                    <div> Pollution : </div>
                                    <article id="asideCard2">
                                    </article>
                                    <div> Humidité :</div>
                                    <article id="asideCard3">
                                    </article>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            );
        }
        if(this.state.name=='admin'){
            return (
                <div id="toxicite">
                    <div className="main" id="main">
                        <Navbar/>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12" id="nav2">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-3  col-sm-3 d-none d-lg-block">

                                            </div>
                                            <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                                <div id="home"><button id="str" onClick={() => this.handleclickaccueil()}>Accueil </button> </div>
                                            </div>
                                            <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                                <div id="home"><button id="str" onClick={() => this.handleclickcapteurs()}>Nos capteurs</button> </div>
                                            </div>
                                            <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                                <div id="home"><button id="str" onClick={() => this.handleclickadmin()}>Admin</button> </div>
                                            </div>
                                            <div className="col-lg-3  col-sm-3 d-none d-lg-block">

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-lg-9">

                                    <div id="mainCard">
                                        <h2>Ajouter un utilisateur</h2><br/>
                                        <form >
                                            <label>
                                                Location : <input id="location" type="text" name="location"/>
                                            </label><br/>
                                            <label>
                                                Nombre de personne dans la maison : <input id="nbpers" type="text" name="personInHouse"/>

                                            </label><br/>
                                            <label>
                                                Taille de la maison : <select id="size">
                                                <option value="small">Small</option>
                                                <option value="medium">Medium</option>
                                                <option value="big">Big</option>
                                            </select>

                                            </label><br/>
                                            <input type="submit" value="Ajouter" onClick={() => this.add()}/>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div id="asideCard" className="card">
                                        <article>
                                            Pollution par pays
                                            France: 37
                                            <div id="buttons">

                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

            );
        }
    }
}

export default Rendufinale;
