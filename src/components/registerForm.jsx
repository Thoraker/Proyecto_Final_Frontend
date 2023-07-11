import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../routes/App'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './formStyles.css'

const RegisterForm = () => {
	const state = useContext(AppContext)
	const [progress, setProgress] = useState(0)
	const [successMessage, setSuccessMessage] = useState('')

	const validationSchema = Yup.object().shape({
		userName: Yup.string()
			.required('El nombre de usuario es requerido.')
			.matches(/^[a-zA-Z0-9_]+$/, 'El nombre de usuario solo puede contener letras, números y guiones bajos.'),

		email: Yup.string().email('Correo electrónico inválido.').required('El correo es requerido.'),

		password: Yup.string()
			.required('La contraseña es requerida.')
			.min(8, 'La contraseña debe tener al menos 8 caracteres.')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
				'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.'
			),

		firstName: Yup.string().required('El nombre es requerido.'),
		lastName: Yup.string().required('El apellido es requerido.'),
		avatar: Yup.string().required('Elige un avatar.'),
	})

	const formik = useFormik({
		initialValues: {
			userName: '',
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			avatar: '',
		},
		validationSchema,
		onSubmit: (values) => {
			state.actions.createUser(values)
			setSuccessMessage('Su registro ha sido exitoso.')
			setTimeout(() => {
				setSuccessMessage('')
				// Redireccionar al usuario a otra página aquí
			}, 5000)
		},
	})

	useEffect(() => {
		const fullFields = Object.values(formik.values).filter((field) => field !== '')
		const newProgress = (fullFields.length / Object.keys(formik.values).length) * 100
		setProgress(newProgress)
	}, [formik.values])

	return (
		<div className='container-fluid'>
			<div
				className='container fst-italic rounded-3'
				style={{
					background: 'linear-gradient(90deg, rgba(234,225,224,1) 34%, rgba(181,96,82,1) 98%)',
				}}
			>
				<form className='p-3 m-3' onSubmit={formik.handleSubmit} autoComplete='off'>
					<h3 className='text-center'>Regístrate</h3>
					<div className='row'>
						<div className='col-lg-4'>
							<img
								className='img-fluid rounded-5 p-3'
								src={formik.values.avatar === '' ? 'src/assets/invitado.png' : formik.values.avatar}
								alt='Avatar'
							/>
						</div>
						<div className='col-lg-8 col-md-6 col-sm-12 p-3'>
							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Nombre de Usuario'
									name='userName'
									value={formik.values.userName}
									onChange={formik.handleChange}
								/>
								{formik.errors.userName && formik.touched.userName && (
									<div className='error-message'>{formik.errors.userName}</div>
								)}
							</div>

							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Correo'
									name='email'
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
								{formik.errors.email && formik.touched.email && (
									<div className='error-message'>{formik.errors.email}</div>
								)}
							</div>

							<div className='form-group pb-2'>
								<input
									type='password'
									className='form-control'
									placeholder='Contraseña'
									name='password'
									value={formik.values.password}
									onChange={formik.handleChange}
								/>
								{formik.errors.password && formik.touched.password && (
									<div className='error-message'>{formik.errors.password}</div>
								)}
							</div>

							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Nombre'
									name='firstName'
									value={formik.values.firstName}
									onChange={formik.handleChange}
								/>
								{formik.errors.firstName && formik.touched.firstName && (
									<div className='error-message'>{formik.errors.firstName}</div>
								)}
							</div>

							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Apellido'
									name='lastName'
									value={formik.values.lastName}
									onChange={formik.handleChange}
								/>
								{formik.errors.lastName && formik.touched.lastName && (
									<div className='error-message'>{formik.errors.lastName}</div>
								)}
							</div>

							<div className='form-group pb-2'>
								<select
									className='form-select me-2'
									name='avatar'
									value={formik.values.avatar}
									onChange={formik.handleChange}
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
								{formik.errors.avatar && formik.touched.avatar && (
									<div className='error-message'>{formik.errors.avatar}</div>
								)}
							</div>
							{successMessage && (
								<div className='alert alert-success' role='alert'>
									{successMessage}
								</div>
							)}
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
							className='w-50 me-2 btn btn-outline-light rounded-pill border-dark text-dark fw-bold'
							style={{ borderColor: '#654321' }}
						>
							Registrarse <i className='bi bi-upload'></i>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterForm
