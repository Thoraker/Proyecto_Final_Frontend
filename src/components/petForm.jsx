import React, { useState, useEffect, useContext } from 'react'
import PhotoUploader from './photoUploader'
import { AppContext } from '../routes/App'

const PetForm = () => {
	const state = useContext(AppContext)
	const [name, setName] = useState('')
	const [specie, setSpecie] = useState('')
	const [age, setAge] = useState('')
	const [size, setSize] = useState('')
	const [needBackyard, setNeedBackyard] = useState(false)
	const [forAdoption, setForAdoption] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [progress, setProgress] = useState(0)

	useEffect(() => progressUpdate(), [specie, size])

	const progressUpdate = () => {
		const fullFields = [name, specie, age, size].filter((field) => field !== '')
		const newProgress = (fullFields.length / 4) * 100
		setProgress(newProgress)
	}

	useEffect(() => {
		if (state.store.Pet.id === '' || state.store.Pet.Nombre !== name) {
			setDisabled(true)
		} else {
			setDisabled(false)
		}
	}, [state.store.Pet])

	return (
		<div
			className='container fst-italic rounded-3 pb-3'
			style={{
				backgroundColor: '#00DBDE',
				backgroundImage: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
			}}
		>
			<form
				className='p-3 m-3 pb-0 mb-0'
				onSubmit={(ev) => {
					ev.preventDefault()
					state.actions.createPet({ name, age, specie, size, needBackyard })
				}}
			>
				<h3 className='text-center'>Inscribe tu Mascota</h3>
				<div className='form-group pb-2'>
					<input
						type='text'
						className='form-control'
						placeholder='Nombre'
						value={name}
						onChange={(ev) => {
							setName(ev.target.value)
							progressUpdate()
						}}
					/>
				</div>

				<div className='form-group pb-2'>
					<input
						type='text'
						className='form-control'
						placeholder='Edad'
						value={age}
						onChange={(ev) => {
							setAge(ev.target.value)
							progressUpdate()
						}}
					/>
				</div>

				<div className='form-group pb-2'>
					<div className='d-flex align-items-center'>
						<select
							className='form-select me-2'
							value={specie}
							onChange={(ev) => {
								setSpecie(ev.target.value)
								progressUpdate()
							}}
						>
							<option value=''>Especie</option>
							<option value={1}>Perros</option>
							<option value={2}>Gatos</option>
							<option value={3}>Aves</option>
							<option value={4}>Otros</option>
						</select>

						<select
							className='form-select'
							value={size}
							onChange={(ev) => {
								setSize(ev.target.value)
								progressUpdate()
							}}
						>
							<option value=''>Tamaño</option>
							<option value={1}>Pequeño</option>
							<option value={2}>Mediano</option>
							<option value={3}>Grande</option>
						</select>
					</div>
				</div>

				<div className='form-check my-3'>
					<input
						type='checkbox'
						name='myCheckbox'
						value={needBackyard}
						onChange={(ev) => {
							setNeedBackyard(!needBackyard)
						}}
					/>
					<label className='form-check-label'>Necesita un jardín amplio</label>
				</div>

				<div className='form-check my-3'>
					<input
						type='checkbox'
						name='myCheckbox'
						value={forAdoption}
						onChange={(ev) => {
							setForAdoption(!forAdoption)
						}}
					/>
					<label className='form-check-label'>Necesita un jardín amplio</label>
				</div>

				<div
					className='progress mb-2 bg-success mx-auto'
					style={{
						width: `${progress}%`,
						height: '8px',
						transition: 'width 0.5s ease-in-out',
					}}
				></div>
				<div className='text-center p-0 m-0'>
					<button type='submit' className='w-25 me-2 btn btn-outline-light rounded-pill'>
						Inscribir
					</button>
					<PhotoUploader disabled={disabled} />
				</div>
			</form>
		</div>
	)
}

export default PetForm
