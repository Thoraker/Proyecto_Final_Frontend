import React, { useContext, useState } from 'react'
import { AppContext } from '../routes/App'

const AddressInfo = () => {
	const state = useContext(AppContext)
	const [tab, setTab] = useState(0)

	const direcciones = state.store.User.UserData.Direcciones

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
					{direcciones.length === 0
						? 'No hay direcciones'
						: direcciones.map((direccion, index) => {
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
											{direccion.Calle}
										</button>
									</li>
								)
						  })}
				</div>
				<div className='tab-content' id='v-addresses-tabContent'>
					<div className='card' style={{ width: '18rem' }}>
						<div className='card-body'>
							<h4 className='card-title'>
								{direcciones[tab].Calle} {direcciones[tab].Numero}
							</h4>
							<h5 className='card-subtitle mb-2 text-body-secondary'>{direcciones[tab].Comuna}</h5>
							<p className='card-text'>Departamento : {direcciones[tab].Departamento}</p>
							<p className='card-text'>Region: {Region(direcciones[tab].Region)}</p>
							<p className='card-text'>
								{direcciones[tab].Necesita_Patio ? 'Tiene Patio' : 'No Tiene Patio'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddressInfo
