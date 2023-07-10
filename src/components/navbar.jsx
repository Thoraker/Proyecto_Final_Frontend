import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserDropdown from './UserDropdown'
import NoUserDropdown from './NoUserDropdown'
import { AppContext } from '../routes/App'

const Navbar = () => {
	const state = useContext(AppContext)

	return (
		<nav
			className='navbar navbar-expand-lg fst-italic fixed-top'
			style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
		>
			<div className='container-fluid'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarTogglerDemo01'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<Link className='navbar-brand text- text-danger fs-1 px-5' to='/'>
					Dame una Pata
				</Link>
				<div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link to='/register' className='nav-link'>
								Regístrate
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/adoption' className='nav-link'>
								Mascotas en Adopción
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/foundations' className='nav-link'>
								Fundaciones Amigas
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/invite' className='nav-link'>
								Invitar <i className='bi bi-share-fill'></i>
							</Link>
						</li>
					</ul>
				</div>
				<div className='col-2'>{state.store.usuario.user !== '' ? <UserDropdown /> : <NoUserDropdown />}</div>
			</div>
		</nav>
	)
}

export default Navbar
