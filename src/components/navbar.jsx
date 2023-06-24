import React from 'react'
import Logout from './logout.jsx'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='container'>
			<nav className='navbar navbar-expand-lg bg-body-secondary'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavDropdown'
						aria-controls='navbarNavDropdown'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'>
							<Link to='/' className='navbar-brand fs-2 container-fluid col-2'>
								Dame Una Pata
							</Link>
						</span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNavDropdown'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link to='/' className='nav-link active' aria-current='page'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link'>Features</Link>
							</li>
							<li className='nav-item'>
								<Logout clase={'nav-link active'} />
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									Eventos
								</a>
							</li>
						</ul>
					</div>
					<div>
						<li className='nav-item dropdown d-flex'>
							<Link
								className='nav-link dropdown-toggle'
								href='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								<i className='bi bi-person-fill'></i> Login/Register
							</Link>
							<ul className='dropdown-menu'>
								<li>
									<Link className='nav-link' to='/login'>
										Login
									</Link>
								</li>
								<li>
									<Link className='nav-link' to='/register'>
										Register
									</Link>
								</li>
								<li>
									<Link className='dropdown-item'>Something else here</Link>
								</li>
							</ul>
						</li>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
