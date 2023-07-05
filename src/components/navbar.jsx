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
				<Link className='navbar-brand fs-1 px-5' to='/'>
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
							<p>
								<Link to='/foundations' className='nav-link'>
									Fundaciones Amigas
								</Link>
							</p>
						</li>
						{/* Solo como ejemplo  */}
						<li className='nav-item'>
							<Link to='/login' className='nav-link'>
								login
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/pet' className='nav-link'>
								mascotas
							</Link>
						</li>
					</ul>
				</div>
				<div className='col-2'>{state.store.User.Usuario !== '' ? <UserDropdown /> : <NoUserDropdown />}</div>
			</div>
		</nav>
	)
}

export default Navbar
