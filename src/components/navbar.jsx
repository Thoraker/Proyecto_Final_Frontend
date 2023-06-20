import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='container'>
			<nav className='navbar navbar-expand-lg bg-body-secondary'>
				<div className='container-fluid'>
					<Link to='/' className='navbar-brand fs-2 container-fluid col-2'>
						Dame Una Pata
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavDropdown'
						aria-controls='navbarNavDropdown'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
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
							<li className='nav-item dropdown'>
								<Link
									className='nav-link dropdown-toggle'
									href='#'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Dropdown link
								</Link>
								<ul className='dropdown-menu'>
									<li>
										<a className='dropdown-item'>Action</a>
									</li>
									<li>
										<Link className='dropdown-item'>Another action</Link>
									</li>
									<li>
										<Link className='dropdown-item'>Something else here</Link>
									</li>
								</ul>
							</li>
							<li className='nav-item position-absolute end-0 me-5'>
								<Link className='nav-link' to='/login'>
									Login
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
