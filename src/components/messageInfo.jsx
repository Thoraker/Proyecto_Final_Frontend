import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'
import PetCard from './petCard'

const MessageInfo = () => {
	const state = useContext(AppContext)
	const [pets, setPets] = useState(0)

	useEffect(() => {
		state.actions.addPet(state.store.mascotas[pets])
	}, [])

	return (
		<div className='d-flex align-items-start p-3'>
			<div className='nav flex-column nav-pills me-3' id='v-pets-tab' role='pets' aria-orientation='vertical'>
				{state.store.usuario.messages.length === 0 ? (
					<li className='nav-item' role='presentation'> <h5>No has comentado nada aún</h5> </li>
				) : (
					state.store.usuario.messages.map((mensaje, index) =>
				)
					return (
						<li className='nav-item' key={index} role='presentation'>
							<button
								className={
									index === pets
										? 'nav-link border border-dark active px-5 m-2 w-100 shadow'
										: 'nav-link border border-dark px-5 m-2 w-100 shadow'
								}
								id='profile-tab'
								data-bs-toggle='tab'
								data-bs-target='#profile-tab-pane'
								type='button'
								role='tab'
								onClick={() => {
									setPets(index)
									state.actions.addPet(mascota)
								}}
								aria-selected='false'
							>
								{mascota.name}
							</button>
						</li>
					)
				})}
			</div>
			<div className='col'>
				<PetCard pet={state.store.mascotas[pets]} />
				<div className='col m-3'>
					<button type='button' className='btn shadow forest' id='formbtn'>
						<Link className='text-light' to='/pet'>
							Inscribe tu Mascota
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default MessageInfo
