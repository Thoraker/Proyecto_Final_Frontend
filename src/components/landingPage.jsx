import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QRCodeSVG } from 'qrcode.react';
import { PiPawPrintBold } from 'react-icons/pi';

const Pagina = () => {
	return (
		<div className='d-flex justify-content-center vh-100'>
			<div className='container'>
				<div className='row vh-100 justify-content-center align-items-center'>
					<div className='col-lg-7'>
						{/* Contenido de la parte izquierda */}
					</div>
					<div
						className='col-lg-5 d-flex align-items-center'
						style={{
							background:
								'linear-gradient(90deg, rgba(130,6,21,1) 10%, rgba(222,137,34,1) 50%, rgba(130,6,21,1) 90%)',
						}}
					>
						<div className='text-center text-white'>
							<h1 className='title font-weight-bold mt-4'>BIENVENIDOS</h1>
							<div className='font-weight-bold px-5 m-3'>Adopta tu mascota y descubre más opciones.</div>
							<button
								className='btn btn-danger mt-3 rounded-pill w-50'
								style={{
									backgroundColor: 'transparent',
									border: '2px solid #fff',
									width: '180px',
								}}
							>
								INGRESA <PiPawPrintBold />
							</button>
							<div className='p-5'>
								<label>
									<p>Escanee el código QR para acceder a la aplicación:</p>
								</label>
								<div className='border border-white'>
									<QRCodeSVG value='https://localhost:5173/pet:11' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagina;
