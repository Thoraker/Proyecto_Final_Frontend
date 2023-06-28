import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserDropdown from './UserDropdown'
import NoUserDropdown from './NoUserDropdown'
import { AppContext } from '../routes/App'

const Navbar = () => {
	const state = useContext(AppContext)

	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary fst-italic'>
			<div className='container-fluid'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarTogglerDemo01'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<Link className='navbar-brand fw-bold' to='/'>
					Dame una Pata
				</Link>
				<div className='collapse navbar-collapse'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link to='/register' className='nav-link'>
								Regístrate
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/pet' className='nav-link'>
								Registra una mascota
							</Link>
						</li>
					</ul>
				</div>
				<div className='col-2'>
					{state.store.User.UserData.Usuario !== '' ? <UserDropdown /> : <NoUserDropdown />}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
