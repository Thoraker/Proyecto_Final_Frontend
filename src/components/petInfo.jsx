import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'
import PetCard from './petCard'

const PetInfo = () => {
	const state = useContext(AppContext)
	const [pets, setPets] = useState(0)

	useEffect(() => {
		state.actions.addPet(state.store.Mascotas[pets])
	}, [])

	return (
		<div className='card'>
			<div className='d-flex align-items-start'>
				<div className='nav flex-column nav-pills me-3' id='v-pets-tab' role='pets' aria-orientation='vertical'>
					{state.store.Mascotas.map((mascota, index) => {
						return (
							<li className='nav-item' key={index} role='presentation'>
								<button
									className={
										index === pets ? 'nav-link active px-5 m-2 w-100' : 'nav-link px-5 m-2 w-100'
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
									{mascota.Nombre}
								</button>
							</li>
						)
					})}
				</div>
				<div className='col'>
					<PetCard pet={state.store.Mascotas[pets]} />
					<div className='col m-3'>
						<button type='button' className='btn btn-primary '>
							<Link className='text-light' to='/pet'>
								Inscribe tu Mascota
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PetInfo
