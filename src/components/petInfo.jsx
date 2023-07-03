import React, { useContext } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'

const PetInfo = () => {
	const state = useContext(AppContext)
	return (
		<div className='card mb-3'>
			<div className='row g-0'>
				<div className='col-md-3 p-4'>
					<ul>
						<li>
							{state.store.User.UserData.Mascotas.map((mascota, index) => {
								return <li key={index}>{mascota.Nombre}</li>
							})}
						</li>
					</ul>
				</div>
				<div className='col-md-8 m-2'>
					<div className='card-body'>
						<h3 className='card-title'>{state.store.User.UserData.Usuario}</h3>
						<div className='card-text'>
							<ul className='list-group list-group-horizontal my-2'>
								<li className='list-group-item col-3'>Nombre</li>
								<li className='list-group-item col-9'>{state.store.User.UserData.Nombre}</li>
							</ul>
							<ul className='list-group list-group-horizontal my-2'>
								<li className='list-group-item col-3'>Apellido</li>
								<li className='list-group-item col-9'>{state.store.User.UserData.Apellido}</li>
							</ul>
							<ul className='list-group list-group-horizontal my-2'>
								<li className='list-group-item col-3'>Email</li>
								<li className='list-group-item col-9'>{state.store.User.UserData.Email}</li>
							</ul>
							<ul className='list-group list-group-horizontal my-2'>
								<li className='list-group-item col-3'>Buscas</li>
								<li className='list-group-item col-9'>
									{state.store.User.UserData.Dador
										? 'Busco un hogar para mis mascotas'
										: 'Busco una mascota para mi hogar'}
								</li>
							</ul>
						</div>
						<p className='card-text'>
							<small className='text-body-secondary'>
								Si quieres modificar tu contraseña presiona <Link to='/forgotten'>aquí</Link>
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PetInfo
