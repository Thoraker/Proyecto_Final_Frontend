import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { ProgressBar } from 'react-bootstrap'

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
	const [progreso, setProgreso] = useState(0)

	const actualizarProgreso = (valores) => {
		const camposCompletados = Object.values(valores).filter((valor) => valor !== '').length
		const totalCampos = Object.keys(valores).length
		const porcentaje = (camposCompletados / totalCampos) * 100
		setProgreso(porcentaje)
	}

	return (
		<Formik
			initialValues={{ firstName: '', lastName: '', email: '' }}
			validateOnChange
			validate={(valores) => {
				const errors = {}
				if (!valores.firstName) {
					errors.firstName = 'Por favor ingresa un nombre'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.firstName)) {
					errors.firstName = 'El nombre solo puede contener letras y espacios'
				}

				if (!valores.lastName) {
					errors.lastName = 'Por favor ingresa un apellido'
				} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastName)) {
					errors.lastName = 'El apellido solo puede contener letras y espacios'
				}

				if (!valores.email) {
					errors.email = 'Por favor ingresa un correo'
				} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
					errors.email = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo'
				}
				actualizarProgreso(valores)
				return errors
			}}
			onSubmit={(valores, { resetForm }) => {
				resetForm()
				cambiarFormularioEnviado(true)
				setTimeout(() => cambiarFormularioEnviado(false), 4000)
				setProgreso(0)

				console.log('Formulario enviado')
			}}
		>
			{({ errors }) => (
				<Form className='formulario'>
					<div>
						<label htmlFor='name'>Name</label>
						<Field type='text' id='name' name='name' placeholder='Bev'></Field>
						<ErrorMessage
							name='name'
							component={() => <div className='error'>{errors.name}</div>}
						></ErrorMessage>
					</div>
					<div>
						<label htmlFor='lastName'>Last Name</label>
						<Field type='text' id='lastName' name='lastName' placeholder='Poni'></Field>
						<ErrorMessage
							name='lastName'
							component={() => <div className='error'>{errors.lastName}</div>}
						></ErrorMessage>
					</div>
					<div>
						<label htmlFor='email'>Email</label>
						<Field type='text' id='email' name='email' placeholder='correo@correo.com'></Field>
						<ErrorMessage
							name='email'
							component={() => <div className='error'>{errors.email}</div>}
						></ErrorMessage>
					</div>
					<div>
						<Field name='país' as='select'>
							<option value='Chile'>Chile</option>
							<option value='Argentina'>Argentina</option>
							<option value='Venezuela'>Venezuela</option>
						</Field>
					</div>

					<div>
						<label>
							<ProgressBar now={progreso} label={`${progreso}%`} />
						</label>
					</div>

					<div>
						<button type='submit' id='botónReg'>
							Enviar
						</button>
					</div>
					{formularioEnviado && <p className='éxito'>Formulario enviado con éxito!</p>}
				</Form>
			)}
		</Formik>
	)
}

export default Formulario
