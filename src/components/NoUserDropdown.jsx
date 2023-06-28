import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../routes/App'

const NoUserDropdown = () => {
	const state = useContext(AppContext)

	const avatar = state.store.User.UserData.Avatar
	return (
		<div className='dropdown'>
			<button className='btn btn-outline-primary' type='button' data-bs-toggle='dropdown'>
				<div className='card'>
					<div className='row g-0'>
						<div className='col-4'>
							<img className='img-fluid' src={avatar} />
						</div>
						<div className='col-8'>
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
