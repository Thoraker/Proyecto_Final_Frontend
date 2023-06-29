import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../routes/App'

const RegisterForm = () => {
	const state = useContext(AppContext)
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [specie, setSpecie] = useState('')
	const [size, setSize] = useState('')
	const [description, setDescription] = useState('')
	const [progress, setProgress] = useState(0)

	useEffect(() => progressUpdate(), [specie, size])

	const progressUpdate = () => {
		const fullFields = [name, age, specie, size, description].filter((field) => field !== '')
		const newProgress = (fullFields.length / 5) * 100 // Suponiendo 5 campos en total
		console.log(specie)
		setProgress(newProgress)
	}

	return (
		<div className='container fst-italic rounded-3' style={{
			backgroundColor: '#00DBDE',
			backgroundImage: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)'
		}}>

			<form
				className='p-3 m-3'
				onSubmit={(ev) => {
					ev.preventDefault()
					state.actions.createPet(name, age, specie, size, description)
				}}>

				<h3 className='text-center'>Cuéntanos acerca de la Mascota</h3>
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
							<option value='Perros'>Perros</option>
							<option value='Gatos'>Gatos</option>
							<option value='Aves'>Aves</option>
							<option value='Otros'>Otros</option>
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
							<option value='Pequeño'>Pequeño</option>
							<option value='Mediano'>Mediano</option>
							<option value='Grande'>Grande</option>
						</select>
					</div>
				</div>

				<div className='form-group pb-2 d-flex flex-column align-items-center'>
					<textarea
						className='form-control'
						id='Description1'
						placeholder='Su Historia'
						rows='3'
						value={description}
						onChange={(ev) => {
							setDescription(ev.target.value)
							progressUpdate()
						}}
						maxLength={100}
					></textarea>
					<p>Remaining characters: {100 - description.length}</p>
				</div>

				<div className='progress mb-3 pb-2' style={{
					width: `${progress}%`,
					height: '8px',
					backgroundColor: '#0a5b1a',
					transition: 'width 0.5s ease-in-out',
					transform: `translateX(-50%) scaleX(2)`,
					transformOrigin: 'center'
				}}>
				</div>
				

				<div>  <PhotoUploader /> </div>

				<div className='pb-2 text-center'>
					<button type='submit' className='me-2 bg-transparent rounded-pill border border-purple'>
						Publicar
					</button>
				</div>
			</form>
		</div>
	)
}

export default RegisterForm
