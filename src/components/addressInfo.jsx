import React, { useContext, useState } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'

const AddressInfo = () => {
	const state = useContext(AppContext)
	const [address, setAddress] = useState(0)

	const Region = (region) => {
		if (region === 1) {
			return 'Tarapacá'
		} else if (region === 2) {
			return 'Antofagasta'
		} else if (region === 3) {
			return 'Atacama'
		} else if (region === 4) {
			return 'Coquimbo'
		} else if (region === 5) {
			return 'Valparaiso'
		} else if (region === 6) {
			return 'O`Higgins'
		} else if (region === 7) {
			return 'Maule'
		} else if (region === 8) {
			return 'Bio - Bio'
		} else if (region === 9) {
			return 'Araucania'
		} else if (region === 10) {
			return 'Los Lagos'
		} else if (region === 11) {
			return 'Aysén'
		} else if (region === 12) {
			return 'Magallanes Y Antártica'
		} else if (region === 13) {
			return 'Metropolitana'
		} else if (region === 14) {
			return 'Los Rios'
		} else if (region === 15) {
			return 'Arica y Parinacota'
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
					{state.store.Direcciones.map((direccion, index) => {
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
										setAddress(index)
									}}
									aria-selected='false'
								>
									{direccion.Calle}
								</button>
							</li>
						)
					})}
				</div>
				<div className='tab-content' id='v-addresses-tabContent'>
					<div className='card bg-info col m-3 w-100'>
						<div className='card-body py-5'>
							<h4 className='card-title'>
								{state.store.Direcciones[address].Calle} {state.store.Direcciones[address].Numero}
							</h4>
							<h5 className='card-subtitle m-3 text-body-secondary'>
								{state.store.Direcciones[address].Comuna}
							</h5>
							<p className='card-text'>Departamento : {state.store.Direcciones[address].Departamento}</p>
							<p className='card-text'>Region: {Region(state.store.Direcciones[address].Region)}</p>
							<p className='card-text'>
								{state.store.Direcciones[address].Tiene_Patio ? 'Tiene Patio' : 'No Tiene Patio'}
							</p>
						</div>
					</div>
					<div className='col m-3'>
						<button type='button' className='btn btn-primary '>
							<Link className='text-light' to='/address'>
								Inscribe una Dirección
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddressInfo
