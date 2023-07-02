import React, { useContext } from 'react'
import { AppContext } from '../routes/App'
import { Link, useNavigate } from 'react-router-dom'

const UserDropdown = () => {
	const state = useContext(AppContext)

	const navigate = useNavigate()

	const avatar = state.store.User.UserData.Avatar
	const user = state.store.User.UserData.Usuario

	return (
		<div className='dropdown'>
			<button className='btn btn-outline-success card' type='button' data-bs-toggle='dropdown'>
				<div className='row g-0'>
					<div className='col-3'>
						<img className='img-fluid' src={avatar} />
					</div>
					<div className='col-9'>
						<div className='card-body'>
							<h3 className='card-text'>{user}</h3>
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
					<Link to='/' onClick={(ev) => navigate(0)} className='dropdown-item'>
						Cerrar sesión
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default UserDropdown
