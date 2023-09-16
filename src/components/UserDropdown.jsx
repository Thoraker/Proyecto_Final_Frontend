import { useContext } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'

const UserDropdown = () => {
	const state = useContext(AppContext)

	return (
		<div className='dropdown'>
			<button className='btn' id='userButton' type='button' data-bs-toggle='dropdown'>
				<div className='col'>
					<img className='img-fluid' src={state.store.usuario.avatar} />
				</div>
			</button>

			<ul className='dropdown-menu dropdown-menu-end'>
				<li>
					<h5 className='dropdown-header'>{state.store.usuario.user}</h5>
				</li>
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
