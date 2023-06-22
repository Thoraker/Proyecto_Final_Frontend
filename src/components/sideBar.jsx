import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<>
			<div className='vh-100 bg-body-secondary'>
				<div className='d-flex'>
					<img
						src='src/assets/Logo.svg'
						className='img-fluid bg-dark-subtle rounded-pill w-75 mt-5 mx-auto'
						alt='Logo'
					/>
				</div>
				<div className='container-fluid p-5 my-5'>
					<div>
						<Link to='/'>Home</Link>
					</div>
					<div>
						<Link to='/login'>Login</Link>
					</div>
					<div>
						<Link to='/register'>Registro</Link>
					</div>
					<div>
						<Link to='/prueba'>Prueba</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Sidebar
