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
	const [progress, setProgress] = useState(0)

	const [message, setMessage] = useState('')

	useEffect(() => progressUpdate(), [specie, size])

	const progressUpdate = () => {
		const fullFields = [name, specie, age, size].filter((field) => field !== '')
		const newProgress = (fullFields.length / 4) * 100
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
					state.actions.createPet({ name, age, specie, size, needBackyard, forAdoption, message })
				}}
			>
				<h3 className='text-center pt-4'>Inscribe tu Mascota</h3>
				<div className='form-group p-2'>
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

				<div className='form-group p-2'>
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

				<div className='form-group p-2'>
					<div className='d-flex align-items-center gap-2'>
						<select
							className='form-select'
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

				<div className='form-check'>
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

				<div>
					<div className='p-2'>
						<textarea
							className='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
							placeholder='Su historia'
							value={message}
							onChange={(ev) => {
								setMessage(ev.target.value)
							}}
						></textarea>
						<label htmlFor='exampleFormControlTextarea1' className='form-label'>
							* Cuéntanos sobre su historia, temperamento, si esta vacunada o desparasitada, cualquier
							dato relevante.
						</label>
					</div>
				</div>

				<div className='form-check'>
					<input
						type='checkbox'
						name='myCheckbox'
						value={forAdoption}
						onChange={(ev) => {
							setForAdoption(!forAdoption)
						}}
					/>
					<label className='form-check-label'>Le ofrezco en adopción</label>
				</div>

				<div
					className='progress bg-success mx-auto'
					style={{
						width: `${progress}%`,
						height: '8px',
						transition: 'width 0.5s ease-in-out',
					}}
				></div>

				<div className='py-2 text-center'>
					<button
						type='submit'
						className='w-50 btn btn-outline-light rounded-pill'
						style={{ background: '#465084' }}
					>
						Publicar
					</button>
				</div>
			</form>
			<div className='text-center'>
				<PhotoUploader />
			</div>
		</div>
	)
}

export default PetForm
