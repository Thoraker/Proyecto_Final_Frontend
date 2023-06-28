import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { ProgressBar } from 'react-bootstrap'

const RegisterForm = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
	const [progreso, setProgreso] = useState(0)

	const actualizarProgreso = (values) => {
		const camposCompletados = Object.values(values).filter((value) => value !== '').length
		const totalCampos = Object.keys(values).length
		const porcentaje = (camposCompletados / totalCampos) * 100
		setProgreso(porcentaje)
	}

	return (
		<Formik
			initialValues={{
				userName: '',
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				avatar: 'src/assets/invitado.png',
				donor: '',
			}}
			validateOnChange
			validate={(values) => {
				const errors = {}
				if (!values.userName) {
					errors.userName = 'Por favor ingresa tu nombre de usuario'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.userName)) {
					errors.userName = 'El nombre de usuario solo puede contener letras y espacios'
				}
				if (!values.password) {
					errors.password = 'Por favor ingresa tu contraseña'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.password)) {
					errors.password = 'La contraseña solo puede contener letras y espacios'
				}
				if (!values.firstName) {
					errors.firstName = 'Por favor ingresa tu nombre'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.firstName)) {
					errors.firstName = 'El nombre solo puede contener letras y espacios'
				}

				if (!values.lastName) {
					errors.lastName = 'Por favor ingresa tu apellido'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
					errors.lastName = 'El apellido solo puede contener letras y espacios'
				}
				if (!values.email) {
					errors.email = 'Por favor ingresa un correo'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
					errors.email = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo'
				}
				if (!values.donor) {
					errors.donor = 'Por favor indica que buscas'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.donor)) {
					errors.donor = 'Elige una opción'
				}
				if (!values.avatar) {
					errors.avatar = 'Por elige tu avatar'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.avatar)) {
					errors.avatar = 'Elige una opción'
				}
				actualizarProgreso(values)
				return errors
			}}
			onSubmit={(values, { resetForm }) => {
				resetForm()
				cambiarFormularioEnviado(true)
				setTimeout(() => cambiarFormularioEnviado(false), 4000)
				setProgreso(0)
				console.log('Formulario enviado', values)
			}}
		>
			{({ errors }) => (
				<Form className='row g-3'>
					<div className='col-md-6'>
						<label className='form-label' htmlFor='userName'>
							Nombre de Usuario
						</label>
						<Field
							type='text'
							className='form-control'
							id='userName'
							name='userName'
							placeholder='Nombre de Usuario'
						></Field>
						<ErrorMessage
							name='name'
							component={() => <div className='error'>{errors.name}</div>}
						></ErrorMessage>
					</div>
					<div className='col-md-6'>
						<label className='form-label' htmlFor='password'>
							Contraseña
						</label>
						<Field
							type='password'
							className='form-control'
							id='password'
							name='password'
							placeholder='Nombre de Usuario'
						></Field>
						<ErrorMessage
							name='name'
							component={() => <div className='error'>{errors.name}</div>}
						></ErrorMessage>
					</div>
					<div className='col-md-6'>
						<label className='form-label' htmlFor='name'>
							Nombre
						</label>
						<Field type='text' className='form-control' id='name' name='name' placeholder='Nombre'></Field>
						<ErrorMessage
							name='name'
							component={() => <div className='error'>{errors.name}</div>}
						></ErrorMessage>
					</div>
					<div className='col-md-6'>
						<label className='form-label' htmlFor='lastName'>
							Apellido
						</label>
						<Field
							type='text'
							className='form-control'
							id='lastName'
							name='lastName'
							placeholder='Apellido'
						></Field>
						<ErrorMessage
							name='lastName'
							component={() => <div className='error'>{errors.lastName}</div>}
						></ErrorMessage>
					</div>
					<div className='col-md-6'>
						<label className='form-label' htmlFor='email'>
							Correo
						</label>
						<Field
							type='text'
							className='form-control'
							id='email'
							name='email'
							placeholder='Correo'
						></Field>
						<ErrorMessage
							name='email'
							component={() => <div className='error'>{errors.email}</div>}
						></ErrorMessage>
					</div>
					<div className='col-md-3'>
						<label className='form-label' htmlFor='donor'>
							¿Buscas Mascota? o ¿Buscas Donar?
						</label>
						<Field className='form-select' name='donor' id='donor' as='select'>
							<option value='' selected>
								Donar o Adoptar
							</option>
							<option value={true}>Dar en adopción</option>
							<option value={false}>Buscas adoptar</option>
						</Field>
					</div>
					<div className='col-md-3'>
						<label className='form-label' htmlFor='avatar'>
							Selecciona un Avatar
						</label>
						<Field className='form-select' name='avatar' id='avatar' as='select'>
							<option value='' selected>
								Selecciona tu Avatar
							</option>
							<option value='src/assets/1.png'>Imagen 1</option>
							<option value='src/assets/2.png'>Imagen 2</option>
							<option value='src/assets/3.png'>Imagen 3</option>
							<option value='src/assets/4.png'>Imagen 4</option>
							<option value='src/assets/5.png'>Imagen 5</option>
							<option value='src/assets/6.png'>Imagen 6</option>
							<option value='src/assets/7.png'>Imagen 7</option>
							<option value='src/assets/8.png'>Imagen 8</option>
							<option value='src/assets/9.png'>Imagen 9</option>
							<option value='src/assets/10.png'>Imagen 10</option>
						</Field>
					</div>
					<div className='container-fluid'>
						<label>
							<ProgressBar now={progreso} label={`${progreso}%`} />
						</label>
					</div>

					<div>
						<button type='submit'>Enviar</button>
					</div>
					{formularioEnviado && <p className='éxito'>Formulario enviado con éxito!</p>}
				</Form>
			)}
		</Formik>
	)
}

export default RegisterForm
