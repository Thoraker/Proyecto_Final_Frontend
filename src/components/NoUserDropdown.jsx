import React from 'react'
import { Link } from 'react-router-dom'

const NoUserDropdown = () => {
	return (
		<div className='dropdown'>
			<button className='btn btn-outline-primary dropdown-toggle p-1' type='button' data-bs-toggle='dropdown'>
				<div className='card'>
					<div className='row'>
						<div className='col-5'>
							<img className='img-fluid' src='src/assets/invitado.png' />
						</div>
						<div className='col-7'>
							<div className='card-body'>
								<h5 className='card-title'>Ingreso</h5>
							</div>
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
