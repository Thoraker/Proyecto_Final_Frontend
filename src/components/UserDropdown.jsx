import React, { useContext } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'

const UserDropdown = () => {
	const state = useContext(AppContext)

	const avatar = state.store.User.avatar
	const user = state.store.User.user

	return (
		<div className='dropdown'>
			<button className='btn btn-success dropdown-toggle p-1' type='button' data-bs-toggle='dropdown'>
				<div className='card'>
					<div className='row'>
						<div className='col-5'>
							<img className='img-fluid' src={avatar} />
						</div>
						<div className='col-7'>
							<div className='card-body'>
								<h5 className='card-title'>{user}</h5>
							</div>
						</div>
					</div>
				</div>
			</button>
			<ul className='dropdown-menu'>
				<li>
					<Link className='dropdown-item' to='/user/data'>
						Mis Datos
					</Link>
				</li>
				<li>
					<Link className='dropdown-item' to='/user/pet'>
						Mis Mascotas
					</Link>
				</li>
				<li>
					<Link className='dropdown-item' to='/user/address'>
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
