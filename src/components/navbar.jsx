import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserDropdown from './UserDropdown'
import NoUserDropdown from './NoUserDropdown'
import { AppContext } from '../routes/App'
import InviteFriends from './inviteFriends'

const Navbar = () => {
	const state = useContext(AppContext)

	return (
		<nav className='navbar navbar-expand-lg fixed-top mt-0 mt-lg-3 pt-0 pt-lg-3 '>
			<div className='container-fluid bg-light justify-content-between shadow'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='offcanvas'
					data-bs-target='#offcanvasNavbar1'
					aria-controls='offcanvasNavbar'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='col d-flex text-center' id='logo'>
					<Link className='navbar-brand fs-2 fw-bold fst-italic m-3 mx-auto lh-1 text-wrap' to='/'>
						<span style={{ fontSize: '50px' }}>Dame</span> <br />
						una Pata
					</Link>
				</div>
				<div
					className='offcanvas offcanvas-start'
					tabIndex='-1'
					id='offcanvasNavbar1'
					aria-labelledby='offcanvasNavbarLabel'
				>
					<ul className='navbar-nav mb-lg-0 nav-justified '>
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
							<InviteFriends />
						</li>
					</ul>
				</div>
				<div className='col d-flex justify-content-end me-3'>
					{state.store.usuario.user !== '' ? <UserDropdown /> : <NoUserDropdown />}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
