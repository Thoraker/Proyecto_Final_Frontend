import React, { useContext } from 'react'
import { AppContext } from '../routes/App'
// import { Link } from 'react-router-dom'

const UserInfo = () => {
	const state = useContext(AppContext)

	return (
		<div className='card m-3 gradiente100'>
			<div className='row g-0'>
				<div className='col-md-3 p-4'>
					<img src={state.store.usuario.avatar} className='img-fluid' alt='Avatar' />
				</div>
				<div className='col-md-8 m-2'>
					<div className='card-body'>
						<h3 className='card-title'>{state.store.usuario.user}</h3>
						<div className='card-text'>
							<ul className='list-group list-group-horizontal my-2'>
								<li className='list-group-item col-3'>Nombre</li>
								<li className='list-group-item col-9'>{state.store.usuario.first_name}</li>
							</ul>
							<ul className='list-group list-group-horizontal my-2'>
								<li className='list-group-item col-3'>Apellido</li>
								<li className='list-group-item col-9'>{state.store.usuario.last_name}</li>
							</ul>
							<ul className='list-group list-group-horizontal my-2'>
								<li className='list-group-item col-3'>Email</li>
								<li className='list-group-item col-9'>{state.store.usuario.email}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserInfo
