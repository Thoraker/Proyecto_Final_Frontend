import React from 'react'
import { PiPawPrintBold } from 'react-icons/pi'
import LoginModal from './login'

const HomePage = () => {
	return (
		<>
			<div className='card text-bg-dark rounded-0 mb-0 pb-0'>
				<img
					src='src/assets/perro_callejero21_9.jpg'
					className='img-fluid p-0 rounded-0'
					alt='Perro Callejero'
				/>
				<div className='card-img-overlay position-absolute top-50 start-50 translate-middle w-100 d-none d-lg-inline gradiente60'>
					<div className='col-6 text-center '>
						<div className='text-white'>
							<h1 className='fw-bold'>BIENVENIDOS</h1>
							<div className='fw-semibold'>Adopta tu mascota y descubre más opciones.</div>
							<button className='btn btn-outline-light rounded-pill w-50 border-2 my-3'>
								<LoginModal /> <PiPawPrintBold />
							</button>
							{/* <div className='p-5'>
								<label>
									<p>Escanee el código QR para acceder a la aplicación:</p>
								</label>
								<div className='border border-white'>
									<QRCodeSVG value='https://localhost:5173/pet:11' />
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<div className='w-100 d-lg-none mt-0 gradiente80'>
				<div className='col'>
					<div className='text-center text-dark'>
						<h1 className='title pt-4 fw-bold'>BIENVENIDOS</h1>
						<div className='fw-semibold px-5'>Adopta tu mascota y descubre más opciones.</div>
						<button
							className='btn mt-3 mb-5 rounded-pill w-50 my-3'
							style={{
								backgroundColor: 'transparent',
								border: '2px solid #000',
								width: '180px',
							}}
						>
							<LoginModal /> <PiPawPrintBold />
						</button>
						{/* <div className='p-5'>
								<label>
									<p>Escanee el código QR para acceder a la aplicación:</p>
								</label>
								<div className='border border-white'>
									<QRCodeSVG value='https://localhost:5173/pet:11' />
								</div>
							</div> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage
