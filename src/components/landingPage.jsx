import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { QRCodeSVG } from 'qrcode.react'
import { PiPawPrintBold } from 'react-icons/pi'

const Pagina = () => {
	return (
		<div
			className='d-flex justify-content-center vh-100'
			style={{
				backgroundImage:
					'url(https://media.istockphoto.com/id/1030390138/es/vector/gato-perro-lobo-conejo-huella-de-oso-conjunto-de-huellas-de-animales-de-la-pata.jpg?s=612x612&w=0&k=20&c=aIvTg8fv-mlQUwhIvZucVxfESTFPGbB2MUBNy8rPNs0=)',
				backgroundSize: 'cover',
			}}
		>
			<div className='container'>
				<div className='row vh-100'>
					<div className='col-7'>{/* Contenido de la parte izquierda */}</div>
					<div
						className='col-5 d-flex align-items-center px-3'
						style={{
							background: '#A40E0E',
						}}
					>
						<div className='text-center text-white'>
							<h1 className='title display-4 font-weight-bold mt-md-5'>BIENVENIDO</h1>
							<div className='display-5 font-weight-bold'>
								<p>Adopta tu mascota y descubre más opciones.</p>
							</div>
							<button
								className='btn btn-outline-light mt-3 rounded-pill border-2 w-50'
								// style={{
								// 	color: '#fff',
								// 	border: '2px solid #fff',
								// 	width: '180px',
								// }}
							>
								Ingresa <PiPawPrintBold />
							</button>
							<div className='m-4'>
								<p>Escanee el código QR para acceder a la aplicación:</p>
								<label className='border border-white'>
									<QRCodeSVG value='https://localhost:5173' />
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pagina
