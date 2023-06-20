import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<>
			<div className='container w-100 vh-100 bg-body-secondary d-flex flex-column'>
				<div className='p-2'>
					<img src='src/assets/Logo.svg' className='img-fluid bg-light img-thumbnail' alt='Logo' />
				</div>
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
					<Link to='/'>Home</Link>
				</div>
				{/* <div>
					<Link to='/petForm'>Publica tu mascota</Link>
				</div> */}
				<div>
					<Link to='/login'>Login</Link>
				</div>
				<div>
					<Link to='/register'>Registro</Link>
				</div>
				<div>
					<Link to='/prueba'>Prueba</Link>
				</div>
			</div>
		</>
	)
}

export default Sidebar
