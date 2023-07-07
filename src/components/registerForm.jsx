import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../routes/App'
import './formStyles.css'

const RegisterForm = () => {
	const state = useContext(AppContext)
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [avatar, setAvatar] = useState('')
	const [donor, setDonor] = useState(true)
	const [progress, setProgress] = useState(0)

	useEffect(() => progressUpdate(), [donor, avatar])

	const progressUpdate = () => {
		const fullFields = [userName, email, password, firstName, lastName, avatar].filter((field) => field !== '')
		const newProgress = (fullFields.length / 6) * 100
		setProgress(newProgress)
	}

	return (
		<div className='container-fluid'>
			<div
				className='container fst-italic rounded-3'
				style={{
					background: 'linear-gradient(90deg, rgba(234,225,224,1) 34%, rgba(181,96,82,1) 98%)',
				}}
			>
				<form
					className='p-3 m-3'
					onSubmit={(ev) => {
						ev.preventDefault()
						state.actions.createUser({ userName, email, password, firstName, lastName, avatar, donor })
					}}
					autoComplete='off'
				>
					<h3 className='text-center'>Regístrate</h3>
					<div className='row'>
						<div className='col-lg-4'>
							<img
								className='img-fluid rounded-5 p-3'
								src={avatar === '' ? 'src/assets/invitado.png' : avatar}
								alt='Avatar'
							/>
						</div>
						<div className='col-lg-8 col-md-6 col-sm-12 p-3'>
							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Nombre de Usuario'
									value={userName}
									onChange={(ev) => {
										setUserName(ev.target.value)
										progressUpdate()
									}}
								/>
							</div>

							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Correo'
									value={email}
									onChange={(ev) => {
										setEmail(ev.target.value)
										progressUpdate()
									}}
								/>
							</div>

							<div className='form-group pb-2'>
								<input
									type='password'
									className='form-control'
									placeholder='Contraseña'
									value={password}
									onChange={(ev) => {
										setPassword(ev.target.value)
										progressUpdate()
									}}
								/>
							</div>

							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Nombre'
									value={firstName}
									onChange={(ev) => {
										setFirstName(ev.target.value)
										progressUpdate()
									}}
								/>
							</div>

							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Apellido'
									value={lastName}
									onChange={(ev) => {
										setLastName(ev.target.value)
										progressUpdate()
									}}
								/>
							</div>

							<div className='form-group pb-2'>
								<select
									className='form-select me-2'
									value={avatar}
									onChange={(ev) => {
										setAvatar(ev.target.value)
										progressUpdate()
									}}
								>
									<option value=''>Elige tu Avatar</option>
									<option value='src/assets/1.png'>Avatar 1</option>
									<option value='src/assets/2.png'>Avatar 2</option>
									<option value='src/assets/3.png'>Avatar 3</option>
									<option value='src/assets/4.png'>Avatar 4</option>
									<option value='src/assets/5.png'>Avatar 5</option>
									<option value='src/assets/6.png'>Avatar 6</option>
									<option value='src/assets/7.png'>Avatar 7</option>
									<option value='src/assets/8.png'>Avatar 8</option>
									<option value='src/assets/9.png'>Avatar 9</option>
									<option value='src/assets/10.png'>Avatar 10</option>
								</select>
							</div>

							<div className='form-check my-3'>
								<input
									type='checkbox'
									name='myCheckbox'
									value={donor}
									onChange={(ev) => {
										setDonor(!donor)
										progressUpdate()
									}}
								/>
								<label className='form-check-label'>Quiero dar mascotas en adopción</label>
							</div>
						</div>
					</div>
					<div
						className='progress mb-3 pb-2 mx-auto'
						style={{
							width: `${progress}%`,
							height: '8px',
							backgroundColor: '#0a5b1a',
							transition: 'width 0.5s ease-in-out',
							transformOrigin: 'center',
						}}
					></div>

					<div className='pb-2 text-center'>
						<button
							type='submit'
							id='formbtn'
							className='w-50 me-2 btn btn-outline-light rounded-pill border-dark text-dark fw-bold'
							style={{ borderColor: '#654321' }}
						>
							Registrarse
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterForm
