import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

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
			<div className='mx-auto'>
				<div className='row' style={{ width: '120%', height: '100vh' }}>
					<div className='col-6'>{/* Contenido de la parte izq */}</div>

					<div
						className='col-6 '
						style={{
							background: '#A40E0E',
						}}
					>
						<div className='content text-center'>
							<h1 className='text-white display-4 font-weight-bold' style={{ marginTop: '90px' }}>
								Adopta tu mascota
							</h1>
							<div className='text-white display-6 font-weight-bold'>
								<h4>La mejor experiencia para ti y tus mascotas.</h4>
							</div>

							<button
								className='btn btn-danger mt-4 rounded-pill'
								style={{
									backgroundColor: 'rgba(0, 0, 0, 0)',
									color: '#fff',
									border: '2px solid #fff',
									width: '180px',
								}}
							>
								Ingresa
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pagina
