import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../routes/App'
import { PiPawPrintBold } from 'react-icons/pi'
import { Modal } from 'react-bootstrap'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginModal = () => {
	const state = useContext(AppContext)
	const [showModal, setShowModal] = useState(false)
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [loginError, setLoginError] = useState(false)
	const [loginSuccess, setLoginSuccess] = useState(false)

	const validationSchema = Yup.object().shape({
		user: Yup.string().required('El nombre de usuario es requerido.'),
		password: Yup.string()
			.required('La contraseña es requerida.')
			.min(8, 'La contraseña debe tener al menos 8 caracteres.')
			.max(20, 'La contraseña debe tener como máximo 20 caracteres.'),
	})

	const handleCloseModal = () => {
		setUser('')
		setPassword('')
		setLoginError(false)
		setShowModal(false)
	}

	const handleShowModal = () => {
		setShowModal(true)
	}

	const handleLogin = (event) => {
		event.preventDefault()

		validationSchema
			.validate({ user, password })
			.then(() => {
				state.actions.login(user, password)
				handleCloseModal()
				setLoginSuccess(true)
				setTimeout(() => {
					setLoginSuccess(false)
				}, 4000)
			})
			.catch((error) => {
				console.log(error.message)
				setLoginError(true)
			})
	}

	return (
		<>
			<Link className='dropdown-item' onClick={handleShowModal}>
				Ingresa
			</Link>

			<Modal show={showModal} onHide={handleCloseModal} centered>
				<Modal.Header closeButton onClick={handleCloseModal}>
					<Modal.Title className='text-center'>Iniciar sesión</Modal.Title>

					{loginSuccess && (
						<div className='alert alert-success' role='alert'>
							Login exitoso!
						</div>
					)}
				</Modal.Header>
				<Modal.Body>
					<div className='wrapper d-flex flex-column align-items-center'>
						<form onSubmit={handleLogin}>
							<div className='row justify-content-center py-3'>
								<img
									className='rounded-pill w-25'
									src='https://img.freepik.com/vector-premium/perfil-avatar-ilustraciones-vectoriales-sitio-web-redes-sociales-icono-perfil-usuario_495897-224.jpg?'
									alt='Avatar'
								/>
							</div>
							<div className='row py-3'>
								<input
									className='fs-5 border-0 border-bottom bg-transparent mx-auto w-75'
									type='text'
									placeholder='Nombre de Usuario'
									value={user}
									onChange={(ev) => setUser(ev.target.value)}
								/>
							</div>
							<div className='row py-3'>
								<input
									className='fs-5 border-0 border-bottom bg-transparent mx-auto w-75'
									type='password'
									placeholder='Contraseña'
									value={password}
									onChange={(ev) => setPassword(ev.target.value)}
								/>
							</div>
							{loginError && (
								<div className='alert alert-danger' role='alert'>
									Usuario o contraseña incorrectos. Inténtalo nuevamente.
								</div>
							)}
							<div className='text-center'>
								<Link to='/forgotten' className='text-decoration-none'>
									Forgot Password?
								</Link>
							</div>
							<div className='d-grid gap-2 col-6 mx-auto py-3'>
								<button
									type='submit'
									className='btn btn-outline-success  rounded-pill'
									style={{ borderWidth: '2px' }}
								>
									Log in <PiPawPrintBold />
								</button>
							</div>
						</form>
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default LoginModal
