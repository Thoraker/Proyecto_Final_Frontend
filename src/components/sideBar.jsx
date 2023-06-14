import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
	return (
		<>
			<div>
				<div className='col-1'>
					<img src='src/assets/Logo.svg' className='img-fluid' alt='Logo' />
				</div>
				<div className='col-3'>
					<div className='col'>
						<Link to='/'>Home</Link>
					</div>
					<div className='col'>
						<Link to='/login'>Login</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Sidebar
