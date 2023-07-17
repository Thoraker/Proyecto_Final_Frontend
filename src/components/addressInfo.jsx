import React, { useContext, useState } from 'react'
import { AppContext } from '../routes/App'
import { Link } from 'react-router-dom'
import Data from '../resources/data.json'

const AddressInfo = () => {
	const state = useContext(AppContext)
	const [address, setAddress] = useState(0)

	const Region = (regionNumber) => {
		return Data[regionNumber - 1].region
	}

	const Comuna = (region, comuna) => {
		return Data[region - 1].comunas.find((com) => com.code === comuna).name
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
					{state.store.direcciones.map((direccion, index) => {
						return (
							<li className='nav-item' key={index} role='presentation'>
								<button
									className={
										address === index ? 'nav-link active px-5 m-2 w-100' : 'nav-link px-5 m-2 w-100'
									}
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
									{direccion.street}
								</button>
							</li>
						)
					})}
				</div>
				<div className='tab-content' id='v-addresses-tabContent'>
					<div className='card col m-3 w-100 marine'>
						<div className='card-body py-5'>
							<h4 className='card-title'>
								{state.store.direcciones[address].street} {state.store.direcciones[address].number}
							</h4>
							<h5 className='card-subtitle m-3 text-body-secondary'>
								{Comuna(
									state.store.direcciones[address].region,
									state.store.direcciones[address].commune
								)}
							</h5>
							<p className='card-text'>
								Departamento : {state.store.direcciones[address].department_number}
							</p>
							<p className='card-text'>Region: {Region(state.store.direcciones[address].region)}</p>
							<p className='card-text'>
								{state.store.direcciones[address].has_backyard ? 'Tiene Patio' : 'No Tiene Patio'}
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
