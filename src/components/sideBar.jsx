import React from 'react'
import { Link } from 'react-router-dom'
import './sideBar.css'

const Sidebar = () => {
	return (
		<>
			<div className='container w-100 vh-100 d-flex flex-column' id='sidebar'>
				<h3>Proyecto Dame la Pata</h3>
				<div className=''>
					{/* <form id='search-form' role='search'>
						<input id='q' aria-label='Search contacts' placeholder='Search' type='search' name='q' />
						<div id='search-spinner' aria-hidden hidden={true} />
						<div className='sr-only' aria-live='polite'></div>
					</form> */}
					{/* <form method='post'>
						<button type='submit'>New</button>
					</form> */}
				</div>
				<div>
					<i className="bi bi-house-fill"></i>
					<Link to='/'>Home</Link>
				</div>
				<div>
				<i className="bi bi-wechat"></i>
					<Link to='/'>My history</Link>
				</div>				
				<div>
				<i className="bi bi-person-hearts"></i>
					<Link to='/'>Be volunteer</Link>
				</div>
				<div>
				<i className="bi bi-people-fill"></i>
					<Link to='/'>About us</Link>
				</div>
				<div>
					<Link to='/login'>Login</Link>
				</div>
				<div>
					<Link to='/carrusel'>Carrusel</Link>
				</div>


				<div className='p-2'>
					<img src='src/assets/Logo.svg' className='img-fluid bg-light' alt='Logo' />
				</div>
			</div>
		</>
	)
}

export default Sidebar
