import React, { useContext } from 'react'
import { AppContext } from './App'
import { Link } from 'react-router-dom'

const UserPage = () => {
	const state = useContext(AppContext)
	console.log(state)

	return (
		<div className='card text-center'>
			<div className='card-header'>
				<ul className='nav nav-tabs card-header-tabs'>
					<li className='nav-item'>
						<Link to='/user' className='nav-link'>
							Mis Datos
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/address' className='nav-link'>
							Mis Direcciones
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/pet' className='nav-link active' aria-current='true'>
							Mis Mascotas
						</Link>
					</li>
				</ul>
			</div>
			<div className='card-body'>
				<h5 className='card-title'>Mis Datos</h5>
				<p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
				<Link to='/' className='btn btn-primary'>
					Volver al inicio
				</Link>
			</div>
		</div>
	)
}

export default UserPage
