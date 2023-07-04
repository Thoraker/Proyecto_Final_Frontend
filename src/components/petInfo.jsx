import React, { useContext, useState } from 'react'
import { AppContext } from '../routes/App'
import Carousel from './carousel'

const PetInfo = () => {
	const state = useContext(AppContext)
	const [pets, setPets] = useState(0)

	const mascotas = state.store.User.UserData.Mascotas

	const Specie = (specie) => {
		if (specie === 1) {
			return 'Perro'
		} else if (specie === 2) {
			return 'Gato'
		} else if (specie === 3) {
			return 'Ave'
		} else if (specie === 4) {
			return 'Otro'
		}
	}

	const Size = (size) => {
		if (size === 1) {
			return 'Pequeño'
		} else if (size === 2) {
			return 'Mediano'
		} else if (size === 3) {
			return 'Grande'
		}
	}

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
				<div className='card col'>
					<div className='row'>
						<div className='col w-100'>
							<Carousel photos={mascotas[pets].Fotos} />
						</div>
						<div className='col-5'>
							<div className='card-body p-5'>
								<h4 className='card-title'>{mascotas[pets].Nombre}</h4>
								<h5 className='card-subtitle mb-2 text-body-secondary'>
									{Specie(mascotas[pets].Especie)}
								</h5>
								<p className='card-text'>Tamaño: {Size(mascotas[pets].Tamano)}</p>
								<p className='card-text'>Edad : {mascotas[pets].Edad}</p>
								<p className='card-text'>
									{mascotas[pets].Necesita_Patio ? 'Necesita Patio' : 'No Necesita Patio'}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PetInfo
