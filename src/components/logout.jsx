import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Logout = () => {
	const navigate = useNavigate()

	return (
		<div>
			<Link to='/' onClick={navigate(0)} className='dropdown-item'>
				Cerrar sesión
			</Link>
		</div>
	)
}

export default Logout
