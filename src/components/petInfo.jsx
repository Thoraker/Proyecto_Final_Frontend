import React, { useContext, useState } from 'react'
import { AppContext } from '../routes/App'
import Carousel from './carousel'

const PetInfo = () => {
	const state = useContext(AppContext)
	const [tab, setTab] = useState(0)

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
				<div
					className='nav flex-column nav-pills me-3'
					id='v-pills-tab'
					role='tablist'
					aria-orientation='vertical'
				>
					{mascotas.map((mascota, index) => {
						return (
							<li className='nav-item' key={index} role='presentation'>
								<button
									className='nav-link'
									id='profile-tab'
									data-bs-toggle='tab'
									data-bs-target='#profile-tab-pane'
									type='button'
									role='tab'
									onClick={() => {
										setTab(index)
									}}
									aria-selected='false'
								>
									{mascota.Nombre}
								</button>
							</li>
						)
					})}
				</div>
				<div className='tab-content' id='v-pills-tabContent'>
					<div className='card' style={{ width: '18rem' }}>
						<div className='card-body'>
							<h4 className='card-title'>{mascotas[tab].Nombre}</h4>
							<h5 className='card-subtitle mb-2 text-body-secondary'>{Specie(mascotas[tab].Especie)}</h5>
							<p className='card-text'>Tamaño: {Size(mascotas[tab].Tamano)}</p>
							<p className='card-text'>Edad : {mascotas[tab].Edad}</p>
							<p className='card-text'>
								{mascotas[tab].Necesita_Patio ? 'Necesita Patio' : 'No Necesita Patio'}
							</p>
						</div>
					</div>
				</div>
				<div className='col-4'>
					<Carousel photos={mascotas[tab].Fotos} />
				</div>
			</div>
		</div>
	)
}

export default PetInfo
