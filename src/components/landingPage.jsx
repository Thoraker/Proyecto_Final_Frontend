import React from 'react';
import './landingStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagina = () => {
    return (
        <div id="LandingPage" className="landing-page d-flex justify-content-center" style={{ height: '100vh' }}>
            <div className="mx-auto p-2" style={{width: "600px"}}>
                <div className="row">
                    <div className="col">
                        <div className="content text-center">
                            <h1 className="title text-brown display-4 font-weight-bold" style={{ marginTop: '100px' }}>Adopta tu mascota</h1>
                            <div className="text-white display-6 font-weight-bold">
                                La mejor experiencia para ti y tus mascotas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagina;
