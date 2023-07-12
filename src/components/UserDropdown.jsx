import React, { useContext } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'

const UserDropdown = () => {
	const state = useContext(AppContext)

	return (
		<div className='dropdown'>
			<button className='btn btn-outline-success card' type='button' data-bs-toggle='dropdown'>
				<div className='row g-0'>
					<div className='col-4'>
						<img className='img-fluid' style={{ maxHeight: '70px' }} src={state.store.usuario.avatar} />
					</div>
					<div className='col-8'>
						<div className='card-body'>
							<h5 className='card-text'>{state.store.usuario.user}</h5>
						</div>
					</div>
				</div>
			</button>

			<ul className='dropdown-menu'>
				<li>
					<Link className='dropdown-item' to='/user'>
						Mis Datos
					</Link>
				</li>
				<li>
					<Link className='dropdown-item' to='/user/pet'>
						Mis Mensajes 
					</Link>
				</li>
				<li>
					<hr className='dropdown-divider' />
				</li>
				<li>
					<a href='/' onClick={(ev) => alert('Cerrando sesión')} className='dropdown-item'>
						Cerrar sesión
					</a>
				</li>
			</ul>
		</div>
	)
}

export default UserDropdown
