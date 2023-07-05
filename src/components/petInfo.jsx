import React, { useContext, useState } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'
import PetCard from './petCard'

const PetInfo = () => {
	const state = useContext(AppContext)
	const [pets, setPets] = useState(0)

	return (
		<div className='card'>
			<div className='d-flex align-items-start'>
				<div className='nav flex-column nav-pills mt-2 col-3' id='v-pets-tab' role='tablist'>
					{state.store.Mascotas.map((mascota, index) => {
						return (
							<li className='nav-item' key={index} role='presentation'>
								<button
									className='nav-link px-5 m-2 w-100'
									id='profile-tab'
									data-bs-toggle='tab'
									data-bs-target='#profile-tab-pane'
									type='button'
									role='tab'
									onClick={() => {
										setPets(index)
										console.log(mascota, 'petInfo')
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
								Inscribe una Mascota
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PetInfo
