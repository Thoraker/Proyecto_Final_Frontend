import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
	return (
		<>
			<div className='sidebar'>
				<h1>Proyecto Dame la Pata</h1>
				<form id='search-form' role='search'>
					<input id='q' aria-label='Search contacts' placeholder='Search' type='search' name='q' />
					<div id='search-spinner' aria-hidden hidden={true} />
					<div className='sr-only' aria-live='polite'></div>
				</form>
				<form method='post'>
					<button type='submit'>New</button>
				</form>
				<div>
					<img src='src/assets/Logo.svg' className='img-fluid border' alt='Logo' />
				</div>
				<div>
					<Link to='/'>Home</Link>
				</div>
				<div>
					<Link to='/login'>Login</Link>
				</div>
			</div>
		</>
	)
}

export default Sidebar
