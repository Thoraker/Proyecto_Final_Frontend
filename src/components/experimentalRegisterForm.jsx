import React, { useContext } from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import { AppContext } from '../routes/App'

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<div className='col-md-6'>
			<label htmlFor={props.id || props.name} className='form-label'>
				{label}
			</label>
			<input className='form-control' {...field} {...props} />
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</div>
	)
}

const MySelect = ({ label, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<div className='col-md-3'>
			<label htmlFor={props.id || props.name} className='form-label'>
				{label}
			</label>
			<select {...field} {...props} className='form-select' />
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</div>
	)
}

const MyCheckbox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' })
	return (
		<div>
			<label className='checkbox-input'>
				<input type='checkbox' {...field} {...props} />
				{children}
			</label>
			{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
		</div>
	)
}

const SignupForm = () => {
	const state = useContext(AppContext)
	return (
		<>
			<Formik
				initialValues={{
					userName: '',
					password: '',
					firstName: '',
					lastName: '',
					email: '',
					avatar: 'src/assets/invitado.png',
					donor: false,
					acceptedTerms: false,
				}}
				validationSchema={Yup.object({
					userName: Yup.string().max(15, 'Debe tener un máximo de 15 caracteres.').required('Required'),
					password: Yup.string().max(15, 'Debe tener un máximo de 15 caracteres.').required('Required'),
					firstName: Yup.string().max(20, 'Debe tener un máximo de 20 caracteres.').required('Required'),
					lastName: Yup.string().max(20, 'Debe tener un máximo de 20 caracteres.').required('Required'),
					email: Yup.string().email('Dirección de correo invalida.').required('Required'),
					avatar: Yup.string()
						.oneOf(
							[
								'src/assets/1.png',
								'src/assets/2.png',
								'src/assets/3.png',
								'src/assets/4.png',
								'src/assets/5.png',
								'src/assets/6.png',
								'src/assets/7.png',
								'src/assets/8.png',
								'src/assets/9.png',
								'src/assets/10.png',
							],
							'Debes elegir uno de las Avatares.'
						)
						.required('Required'),
					donor: Yup.boolean()
						.required('Required')
						.oneOf([true, false], 'Marca si quieres dar mascotas en adopción.'),
					acceptedTerms: Yup.boolean()
						.required('Required')
						.oneOf([true], 'Debes aceptar los términos y condiciones.'),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						state.actions.createUser(values)
						setSubmitting(false)
					}, 400)
				}}
			>
				<Form>
					<div className='row'>
						<MyTextInput label='Nombre de Usuario' name='userName' type='text' placeholder='Usuario' />
						<MyTextInput label='Contraseña' name='password' type='password' placeholder='Contraseña' />
					</div>
					<div className='row'>
						<MyTextInput label='Nombre' name='firstName' type='text' placeholder='Nombre' />
						<MyTextInput label='Apellido' name='lastName' type='text' placeholder='Apellido' />
					</div>
					<div className='row'>
						<MyTextInput label='Correo' name='email' type='email' placeholder='tu_correo@dameuna.pata' />
						<MySelect label='Tu Avatar' name='avatar'>
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
						</MySelect>
						<MyCheckbox name='donor'>Marca si quieres dar mascotas en adopción.</MyCheckbox>
					</div>

					<MyCheckbox name='acceptedTerms'>Acepto los términos y condiciones</MyCheckbox>

					<button className='btn btn-primary' type='submit'>
						Enviar
					</button>
				</Form>
			</Formik>
		</>
	)
}

export default SignupForm
