import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QRCodeSVG } from 'qrcode.react';
import { PiPawPrintBold } from "react-icons/pi";
import './landingStyles.css';


const Pagina = () => {
	return (
		<div
			id='LandingPage'
			className='landing-page d-flex justify-content-center'
			style={{
				height: '100vh',
				backgroundImage:
					'url(https://media.istockphoto.com/id/1030390138/es/vector/gato-perro-lobo-conejo-huella-de-oso-conjunto-de-huellas-de-animales-de-la-pata.jpg?s=612x612&w=0&k=20&c=aIvTg8fv-mlQUwhIvZucVxfESTFPGbB2MUBNy8rPNs0=)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8'>
						{/* Contenido de la parte izquierda */}
					</div>
					<div
						className='col-md-4 d-flex align-items-center '
						style={{
							background: 'linear-gradient(90deg, rgba(130,6,21,1) 10%, rgba(222,137,34,1) 50%, rgba(130,6,21,1) 89%)',
							height: '100vh',
							overflow: 'hidden',
							padding: '',
						}}>
						<div className='text-center text-white'>
							<h1 className='title font-weight-bold mt-md-4' id='appTitle' >
								BIENVENIDO !
							</h1>
							<div className=' font-weight-bold p-5'>
								Adopta tu mascota y descubre más opciones.
							</div>
							<button
								className='btn btn-danger mt-3 rounded-pill'
								style={{
									backgroundColor: 'transparent',
									color: '#fff',
									border: '2px solid #fff',
									width: '180px',
								}}>
								INGRESA <PiPawPrintBold />
							</button>
							<div className=' p-5'>
								<label>
									<p>Escanee el código QR para acceder a la aplicación:</p>
								</label>
								<label className='border border-white' >
									<QRCodeSVG value='https://localhost:5173' />
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagina;
