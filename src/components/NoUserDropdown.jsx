import React from 'react'
import { Link } from 'react-router-dom'

const NoUserDropdown = () => {
	return (
		<div className='dropdown'>
			<button className='btn btn-outline-primary card' type='button' data-bs-toggle='dropdown'>
				<div className='row g-0'>
					<div className='col-3'>
						<img className='img-fluid' src='src/assets/invitado.png' />
					</div>
					<div className='col-9 '>
						<div className='card-body'>
							<h3 className='card-text'>Ingreso</h3>
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
