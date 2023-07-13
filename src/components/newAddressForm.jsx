import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../routes/App'
import Data from '../resources/data.json'

const NewAddressForm = () => {
	const state = useContext(AppContext)
	const [street, setStreet] = useState('')
	const [buildingNumber, setBuildingNumber] = useState('')
	const [departmentNumber, setDepartmentNumber] = useState('')
	const [region, setRegion] = useState(0)
	const [commune, setCommune] = useState(0)
	const [hasBackyard, setHasBackyard] = useState(false)

	useEffect(() => {}, [region])

	return (
		<div className='card' style={{ paddingTop: '6rem' }}>
			<form>
				<div className='mb-3'>
					<label htmlFor='InputStreet' className='form-label'>
						Nombre de la calle
					</label>
					<input
						type='text'
						className='form-control'
						id='InputStreet'
						aria-describedby='streetHelp'
						value={street}
						onChange={(e) => setStreet(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='InputBuildingNumber' className='form-label'>
						Nombre de la calle
					</label>
					<input
						type='text'
						className='form-control'
						id='InputBuildingNumber'
						aria-describedby='buildingNumberHelp'
						value={buildingNumber}
						onChange={(e) => setBuildingNumber(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='InputDepartmentNumber' className='form-label'>
						Nombre de la calle
					</label>
					<input
						type='text'
						className='form-control'
						id='InputDepartmentNumber'
						aria-describedby='departmentNumberHelp'
						value={departmentNumber}
						onChange={(e) => setDepartmentNumber(e.target.value)}
					/>
				</div>
				<select
					className='form-select'
					aria-label='Selecciona una Región'
					value={region}
					onChange={(e) => setRegion(e.target.value)}
				>
					<option selected>Selecciona la Región</option>
					{Data.map((region, index) => {
						return (
							<option key={index} value={region.region_number}>
								{region.region}
							</option>
						)
					})}
				</select>

				<select
					className='form-select'
					aria-label='Selecciona una Región'
					value={commune}
					onChange={(e) => setCommune(e.target.value)}
				>
					<option selected>Selecciona la Comuna</option>
					{region === 0
						? null
						: Data.find((reg) => reg.region_number === region).communes.map((commune, index) => {
								return (
									<option key={index} value={commune.code}>
										{commune.name}
									</option>
								)
						  })}
				</select>

				<div className='mb-3 form-check'>
					<input type='checkbox' className='form-check-input' id='hasBackyard' />
					<label className='form-check-label' htmlFor='hasBackyard'>
						¿Tiene patio?
					</label>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default NewAddressForm
