import React from 'react';
import logocapteurs from './logocapteurs.png';
import logoutilisateurs from './logoutilisateur.png';
import axios from "axios";
const API_URL = "http://localhost:3000/capteurs/";
const API_URL2 = "http://localhost:3000/utilisateurs/";


class DataCard extends React.Component {


    async componentDidMount() {
       // alert("hello");
        // Call API
        // console.log("Bjr");
        await axios.get(`${API_URL}`,{crossdomain: true})
            .then(({ data }) => {
                // console.log(data);
                const main =data.length;
                document.getElementById('pierre').innerHTML=main;
            })
            .catch(console.error);
        await axios.get(`${API_URL2}`,{crossdomain: true})
            .then(({ data }) => {
                // console.log(data);
                const main =data.length;
                document.getElementById('pierre2').innerHTML=main;
            })
            .catch(console.error);

    }

    render() {
        return (
            <div id="global">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={logocapteurs} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre de capteurs</h5>
                            <div id="pierre"></div>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={logoutilisateurs} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre d'utilisateurs</h5>
                            <div id="pierre2"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>




        );
    }
}
function callAPI () {


};
export default DataCard;