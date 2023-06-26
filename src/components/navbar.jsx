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
					aria-controls='navbarTogglerDemo01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<Link className='navbar-brand mx-3 fs-2 fw-bold' to='/'>
					Dame una Pata
				</Link>
				<div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
					<ul className='navbar-nav me-auto m-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/register'>
								Regístrate
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link active' to='/pet'>
								Registra una mascota
							</Link>
						</li>
					</ul>
				</div>
				<div className='col-2'>{state.store.User.user === '' ? <NoUserDropdown /> : <UserDropdown />}</div>
			</div>
		</nav>
	)
}

export default Navbar
