import React, { useContext } from 'react'
import { AppContext } from '../routes/App'
import { Link, useNavigate } from 'react-router-dom'

const UserDropdown = () => {
	const state = useContext(AppContext)

	const navigate = useNavigate()

	return (
		<div className='dropdown'>
			<button className='btn btn-outline-success card' type='button' data-bs-toggle='dropdown'>
				<div className='row g-0'>
					<div className='col-4'>
						<img className='img-fluid' style={{ maxHeight: '70px' }} src={state.store.User.Avatar} />
					</div>
					<div className='col-8'>
						<div className='card-body'>
							<h5 className='card-text'>{state.store.User.Usuario}</h5>
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
					<Link to='/' onClick={(ev) => navigate(0)} className='dropdown-item'>
						Cerrar sesión
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default UserDropdown
