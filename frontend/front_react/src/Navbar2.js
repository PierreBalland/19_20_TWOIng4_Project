import React from 'react';




class Navbar2 extends React.Component {

    render() {
        return (

            <div id="globaldiv">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3  col-sm-3 d-none d-lg-block">

                        </div>
                        <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                           Accueil
                        </div>
                        <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                           Capteurs
                        </div>
                        <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                            Modifier
                        </div>
                        <div className="col-lg-3  col-sm-3 d-none d-lg-block">

                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
export default Navbar2;