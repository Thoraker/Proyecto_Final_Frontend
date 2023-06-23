import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<>
			<div className='container w-100 vh-100 bg-body-secondary d-flex flex-column'>
				<div className='p-2'>
					<img src='src/assets/Logo.svg' className='img-fluid bg-light rounded-pill' alt='Logo' />
				</div>
				<div className=''></div>
				<div>
					<i className='bi bi-house-fill'></i>
					<Link to='/'>Home</Link>
				</div>
				<div>
					<i className='bi bi-wechat'></i>
					<Link to='/'>My history</Link>
				</div>
				<div>
					<i className='bi bi-person-hearts'></i>
					<Link to='/'>Be volunteer</Link>
				</div>
				<div>
					<i className='bi bi-people-fill'></i>
					<Link to='/'>About us</Link>
				</div>
			</div>
		</>
	)
}

export default Sidebar
