import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserDropdown from './UserDropdown'
import NoUserDropdown from './NoUserDropdown'
import { AppContext } from '../routes/App'

const Navbar = () => {
	const state = useContext(AppContext)

	return (
		<nav className='navbar navbar-expand-lg bg-transparent fst-italic fixed-top'>
			<div className='container-fluid'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarTogglerDemo01'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<Link className='navbar-brand fs-1 p-5' to='/'>
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
								<Link to='/register' className='nav-link'>
									Success link
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
						<li className='nav-item'>
							<Link to='/user/data' className='nav-link'>
								userData
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/user/address' className='nav-link'>
								userAddress
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/user/pet' className='nav-link'>
								userPet
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
