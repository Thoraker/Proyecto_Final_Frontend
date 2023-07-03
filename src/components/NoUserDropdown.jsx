import React from 'react'
import { Link } from 'react-router-dom'

const NoUserDropdown = () => {
	return (
		<div className='dropdown'>
			<button className='btn btn-outline-primary card' type='button' data-bs-toggle='dropdown'>
				<div className='row g-0'>
					<div className='col-4'>
						<img
							className='img-fluid'
							src='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397737/smhqmpxo8pvj3q8pcowx.png'
							style={{ maxHeight: '70px' }}
						/>
					</div>
					<div className='col-8'>
						<div className='card-body'>
							<h5 className='card-text'>Ingreso</h5>
						</div>
					</div>
				</div>
			</button>
			<ul className='dropdown-menu'>
				<li>
					<Link className='dropdown-item' to='/login'>
						Ingresa
					</Link>
				</li>
				<li>
					<Link className='dropdown-item' to='/register'>
						Regístrate
					</Link>
				</li>
				<li>
					<Link className='dropdown-item' to='/invited'>
						Ingresa como Invitado
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default NoUserDropdown
