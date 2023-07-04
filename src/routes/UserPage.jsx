import React from 'react'
// import { Link } from 'react-router-dom'
import UserInfo from '../components/userInfo'
import PetInfo from '../components/petInfo'

const UserPage = () => {
	return (
		<div className='card' style={{ paddingTop: '6rem' }}>
			<ul className='nav nav-tabs' id='myTab' role='tablist'>
				<li className='nav-item' role='presentation'>
					<button
						className='nav-link active'
						id='home-tab'
						data-bs-toggle='tab'
						data-bs-target='#home-tab-pane'
						type='button'
						role='tab'
						aria-controls='home-tab-pane'
						aria-selected='true'
					>
						Mis Datos
					</button>
				</li>
				<li className='nav-item' role='presentation'>
					<button
						className='nav-link'
						id='profile-tab'
						data-bs-toggle='tab'
						data-bs-target='#profile-tab-pane'
						type='button'
						role='tab'
						aria-controls='profile-tab-pane'
						aria-selected='false'
					>
						Mis Mascotas
					</button>
				</li>
				<li className='nav-item' role='presentation'>
					<button
						className='nav-link'
						id='contact-tab'
						data-bs-toggle='tab'
						data-bs-target='#contact-tab-pane'
						type='button'
						role='tab'
						aria-controls='contact-tab-pane'
						aria-selected='false'
					>
						Mis Direcciones
					</button>
				</li>
				<li className='nav-item' role='presentation'>
					<button
						className='nav-link'
						id='contact-tab'
						data-bs-toggle='tab'
						data-bs-target='#contact-tab-pane'
						type='button'
						role='tab'
						aria-controls='contact-tab-pane'
						aria-selected='false'
					>
						Mis Mensajes
					</button>
				</li>
			</ul>
			<div className='tab-content' id='myTabContent'>
				<div
					className='tab-pane fade show active'
					id='home-tab-pane'
					role='tabpanel'
					aria-labelledby='home-tab'
					tabIndex='0'
				>
					<UserInfo />
				</div>
				<div
					className='tab-pane fade'
					id='profile-tab-pane'
					role='tabpanel'
					aria-labelledby='profile-tab'
					tabIndex='1'
				>
					<PetInfo />
				</div>
				<div
					className='tab-pane fade'
					id='contact-tab-pane'
					role='tabpanel'
					aria-labelledby='contact-tab'
					tabIndex='2'
				>
					...
				</div>
				<div
					className='tab-pane fade'
					id='disabled-tab-pane'
					role='tabpanel'
					aria-labelledby='disabled-tab'
					tabIndex='3'
				>
					...
				</div>
			</div>
		</div>

		// <div className='card text-center bg-info' style={{ paddingTop: '6rem' }}>
		// 	<div className='card-header'>
		// 		<ul className='nav nav-tabs card-header-tabs'>
		// 			<li className='nav-item'>
		// 				<Link
		// 					to='/user/data'
		// 					className={section === 0 ? 'nav-link active' : 'nav-link'}
		// 					onClick={() => setSection(0)}
		// 				>
		// 					Mis Datos
		// 				</Link>
		// 			</li>
		// 			<li className='nav-item'>
		// 				<Link
		// 					to='/user/address'
		// 					className={section === 1 ? 'nav-link active' : 'nav-link'}
		// 					onClick={() => setSection(1)}
		// 				>
		// 					Mis Direcciones
		// 				</Link>
		// 			</li>
		// 			<li className='nav-item'>
		// 				<Link
		// 					to='/user/pet'
		// 					className={section === 2 ? 'nav-link active' : 'nav-link'}
		// 					onClick={() => setSection(2)}
		// 				>
		// 					Mis Mascotas
		// 				</Link>
		// 			</li>
		// 		</ul>
		// 	</div>
		// 	<div className='card-body'>
		// 		<Outlet />
		// 	</div>
		// </div>
	)
}

export default UserPage
