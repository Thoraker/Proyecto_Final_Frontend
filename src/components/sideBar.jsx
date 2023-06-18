import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
	return (
		<>
			<div className='container w-100 vh-100 bg-body-secondary border-primary d-flex flex-column p-2'>
				<h3>Proyecto Dame la Pata</h3>
				<div className='p-2'>
					<img src='src/assets/Logo.svg' className='img-fluid bg-light' alt='Logo' />
				</div>
				<div className=''>
					<form id='search-form' role='search'>
						<input id='q' aria-label='Search contacts' placeholder='Search' type='search' name='q' />
						<div id='search-spinner' aria-hidden hidden={true} />
						<div className='sr-only' aria-live='polite'></div>
					</form>
					<form method='post'>
						<button type='submit'>New</button>
					</form>
				</div>
				<div>
					<Link to='/'>Home</Link>
				</div>
				<div>
					<Link to='/login'>Login</Link>
				</div>
				<div>
					<Link to='/carrusel'>Carrusel</Link>
				</div>
			</div>
		</>
	)
}

export default Sidebar
