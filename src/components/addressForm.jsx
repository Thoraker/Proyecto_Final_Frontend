import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../routes/App'

const AddressForm = () => {
	const state = useContext(AppContext)
	const [street, setStreet] = useState('')
	const [buildingNumber, SetBuildingNumber] = useState('')
	const [departmentNumber, setDepartmentNumber] = useState('')
	const [region, setRegion] = useState('')
	const [commune, setCommune] = useState('')
	const [hasBackyard, setHasBackyard] = useState(false)
	const [progress, setProgress] = useState(0)

	useEffect(() => progressUpdate(), [region, commune])

	const progressUpdate = () => {
		const fullFields = [street, buildingNumber, departmentNumber, commune, region].filter((field) => field !== '')
		const newProgress = (fullFields.length / 5) * 100
		setProgress(newProgress)
	}

	return (
		<div
			className='container fst-italic rounded-3 pb-3'
			style={{
				background: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
			}}
		>
			<form
				className='p-0 m-0'
				onSubmit={(ev) => {
					ev.preventDefault()
					state.actions.createAddress({
						street,
						buildingNumber,
						departmentNumber,
						commune,
						region,
						hasBackyard,
					})
				}}
			>
				<h3 className='text-center pt-4'>Indícanos tu dirección</h3>
				<div className='form-group p-2'>
					<input
						type='text'
						style={{ background: '#ebdedf' }}
						className='form-control'
						placeholder='Calle'
						value={street}
						onChange={(ev) => {
							setStreet(ev.target.value)
							progressUpdate()
						}}
					/>
				</div>

				<div className='form-group p-2'>
					<input
						type='text'
						style={{ background: '#ebdedf' }}
						className='form-control'
						placeholder='Numero de casa'
						value={buildingNumber}
						onChange={(ev) => {
							SetBuildingNumber(ev.target.value)
							progressUpdate()
						}}
					/>
				</div>

				<div className='form-group p-2'>
					<input
						type='text'
						style={{ background: '#ebdedf' }}
						className='form-control'
						placeholder='numero de departamento'
						value={departmentNumber}
						onChange={(ev) => {
							setDepartmentNumber(ev.target.value)
							progressUpdate()
						}}
					/>
				</div>

				<div className='form-group p-2'>
					<input
						type='text'
						style={{ background: '#ebdedf' }}
						className='form-control'
						placeholder='Comuna'
						value={commune}
						onChange={(ev) => {
							setCommune(ev.target.value)
							progressUpdate()
						}}
					/>
				</div>

				<div className='form-group p-2'>
					<div className='d-flex align-items-center'>
						<select
							className='form-select'
							style={{ background: '#ebdedf' }}
							value={region}
							onChange={(ev) => {
								setRegion(ev.target.value)
								progressUpdate()
							}}
						>
							<option value='' defaultValue>
								Selecciona la región
							</option>
							<option value='1'>1 Tarapacá</option>
							<option value='2'>2 Antofagasta</option>
							<option value='3'>3 Atacama</option>
							<option value='4'>4 Coquimbo</option>
							<option value='5'>5 Valparaiso</option>
							<option value='6'>6 O`Higgins</option>
							<option value='7'>7 Maule</option>
							<option value='8'>8 Bio - Bio</option>
							<option value='9'>9 Araucania</option>
							<option value='10'>10 Los Lagos</option>
							<option value='11'>11 Aysén</option>
							<option value='12'>12 Magallanes Y Antártica</option>
							<option value='13'>13 Metropolitana</option>
							<option value='14'>14 Los Rios</option>
							<option value='15'>15 Arica y Parinacota</option>
						</select>
					</div>
				</div>
				<div className='form-check'>
					<input
						type='checkbox'
						name='myCheckbox'
						value={hasBackyard}
						onChange={(ev) => {
							setHasBackyard(!hasBackyard)
							progressUpdate()
						}}
					/>
					<label className='form-check-label'>Tengo un jardín amplio para mi mascota</label>
				</div>

				<div
					className='progress bg-success mx-auto'
					style={{
						width: `${progress}%`,
						height: '8px',
						transition: 'width 0.5s ease-in-out',
					}}
				></div>

				<div className='text-center p-0 m-0'>
					<button
						type='submit'
						className='w-50 btn btn-outline-light rounded-pill mb-2'
						style={{ background: '#465084' }}
					>
						Publicar
					</button>
				</div>
			</form>
		</div>
	)
}

export default AddressForm
