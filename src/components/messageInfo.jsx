import React, { useContext, useState } from 'react'
import { AppContext } from '../routes/App'

const MessageBoard = () => {
	const state = useContext(AppContext)
	const [pet, setPet] = useState(0)

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
					id='v-addresses-tab'
					role='addresses'
					aria-orientation='vertical'
				>
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
										setPet(index)
									}}
									aria-selected='false'
								>
									{mascota.Nombre}
								</button>
							</li>
						)
					})}
				</div>
				<div className='tab-content' id='v-addresses-tabContent'>
					<div className='card bg-info col m-3 w-100'>
						<div className='card-body py-5'>
							<h4 className='card-title'>{state.store.Mascotas[pet].Nombre}</h4>
							<h5 className='card-subtitle m-3 text-body-secondary'>
								{Specie(state.store.Mascotas[pet].Especie)}
							</h5>
							<p className='card-text'>Tamaño: {Size(state.store.Mascotas[pet].Tamano)}</p>
							<p className='card-text'>Edad : {state.store.Mascotas[pet].Edad}</p>
							<p className='card-text'>
								{state.store.Mascotas[pet].Necesita_Patio ? 'Necesita Patio' : 'No Necesita Patio'}
							</p>
							<p className='card-text'>
								{state.store.Mascotas[pet].En_Adopcion
									? 'Se entrega en Adopción'
									: 'No disponible para Adopción'}
							</p>
						</div>
					</div>
				</div>
				<div>
					{state.store.Mascotas[pet].Mensajes.map((mensaje, index) => {
						return <p key={index}>{mensaje.Mensaje}</p>
					})}
				</div>
			</div>
		</div>
	)
}

export default MessageBoard
