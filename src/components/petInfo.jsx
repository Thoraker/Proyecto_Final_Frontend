import React, { useContext, useState } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'
import PetCard from './petCard'

const PetInfo = () => {
	const state = useContext(AppContext)
	const [pets, setPets] = useState(0)
	const mascotas = state.store.User.UserData.Mascotas

	return (
		<div className='card'>
			<div className='d-flex align-items-start'>
				<div className='nav flex-column nav-pills' id='v-pets-tab' role='tablist'>
					{mascotas.map((mascota, index) => {
						return (
							<li className='nav-item ' key={index} role='presentation'>
								<button
									className='nav-link px-5 m-2 '
									id='profile-tab'
									data-bs-toggle='tab'
									data-bs-target='#profile-tab-pane'
									type='button'
									role='tab'
									onClick={() => {
										setPets(index)
									}}
									aria-selected='false'
								>
									{mascota.Nombre}
								</button>
							</li>
						)
					})}
				</div>
				<PetCard pet={mascotas[pets]} />
				<button type='button' className='btn btn-primary'>
					<Link className='text-light' to='/pet'>
						Inscribe una Mascota
					</Link>
				</button>
			</div>
		</div>
	)
}

export default PetInfo
