import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../routes/App'

const Login = () => {
	const state = useContext(AppContext)
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	// const history = useNavigate()

	return (
		<div
			className='container-fluid vh-100 fst-italic'
			style={{ background: 'linear-gradient( 90deg, rgba(17,110,42,1) 22%, rgba(171,77,160,1) 84%)' }}
		>
			<div className='col-3 h-75 position-absolute m-5 start-50 translate-middle-x bg-success bg-gradient rounded-3'>
				<form
					className='position-relative top-50 start-50 translate-middle text-center'
					onSubmit={(ev) => {
						ev.preventDefault()
						state.actions.login(user, password)
					}}
				>
					<img
						className='rounded-pill w-25'
						src='https://img.freepik.com/vector-premium/perfil-avatar-ilustraciones-vectoriales-sitio-web-redes-sociales-icono-perfil-usuario_495897-224.jpg?'
						alt='Avatar'
					/>
					<input
						className='fs-5 text-light border-0 border-bottom bg-transparent my-2 mx-5'
						type='text'
						placeholder='Nombre de Usuario'
						value={user}
						onChange={(ev) => setUser(ev.target.value)}
					/>
					<input
						className='fs-5 text-light border-0 border-bottom bg-transparent my-2 mx-5'
						type='password'
						placeholder='Contraseña'
						value={password}
						onChange={(ev) => setPassword(ev.target.value)}
					/>
					<span id='passwordHelpInline' className='form-text'>
						Entre 8 y 20 caracteres
					</span>
					<div className='mt-4'>
						<button type='submit' className='btn btn-primary mb-3'>
							Ingresar
						</button>
					</div>
					<div>
						<span>
							<Link to='/forgotten'>Forgot Password?</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
