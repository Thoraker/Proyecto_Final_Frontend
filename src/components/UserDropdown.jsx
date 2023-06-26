import React, { useContext } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'

const UserDropdown = () => {
	const state = useContext(AppContext)

	return (
		<div className='dropdown'>
			<button
				className='btn btn-success dropdown-toggle p-1'
				type='button'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				<div className='card'>
					<div className='row'>
						<div className='col-5'>
							<img className='img-fluid' src={state.store.User.avatar} />
						</div>
						<div className='col-7'>
							<div className='card-body'>
								<h5 className='card-title'>{state.store.User.user}</h5>
							</div>
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
					<Link className='dropdown-item' to='/pet'>
						Mis Mascotas
					</Link>
				</li>
				<li>
					<Link className='dropdown-item' to='/address'>
						Mis Direcciones
					</Link>
				</li>
				<li>
					<hr className='dropdown-divider' />
				</li>
				<li>
					<Link className='dropdown-item' to='/exit'>
						Salir
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default UserDropdown
