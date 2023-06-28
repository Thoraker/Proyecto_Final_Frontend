import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const UserPage = () => {
	const [section, setSection] = useState(0)

	return (
		<div className='card text-center bg-info'>
			<div className='card-header'>
				<ul className='nav nav-tabs card-header-tabs'>
					<li className='nav-item'>
						<Link
							to='/user/data'
							className={section === 0 ? 'nav-link active' : 'nav-link'}
							onClick={() => setSection(0)}
						>
							Mis Datos
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/user/address'
							className={section === 1 ? 'nav-link active' : 'nav-link'}
							onClick={() => setSection(1)}
						>
							Mis Direcciones
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/user/pet'
							className={section === 2 ? 'nav-link active' : 'nav-link'}
							onClick={() => setSection(2)}
						>
							Mis Mascotas
						</Link>
					</li>
				</ul>
			</div>
			<div className='card-body'>
				<Outlet />
			</div>
		</div>
	)
}

export default UserPage
