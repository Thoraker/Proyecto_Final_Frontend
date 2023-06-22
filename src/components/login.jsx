import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [password, setPassword] = useState('')
	const history = useNavigate()

	const handleLogin = () => {
		// Lógica para realizar la autenticación y establecer isLoggedIn en true
		setIsLoggedIn(true)
		history('/home')
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}

	return (
		<div className='container main vh-100 fst-italic'>
			<div className='wrapper position-absolute top-50 start-50'>
				<form action=''>
					<img
						src='https://img.freepik.com/vector-premium/perfil-avatar-ilustraciones-vectoriales-sitio-web-redes-sociales-icono-perfil-usuario_495897-224.jpg?w=360'
						alt=''
					/>
					<input className='diseño' type='text' placeholder='Name' />
					<input
						className='diseño'
						type='password'
						placeholder='Insert Password'
						aria-labelledby='passwordHelpInline'
						value={password}
						onChange={handlePasswordChange}
					/>
					<div className='col'>
						<span id='passwordHelpInline' className='form-text'>
							Must be 8-20 characters long.
						</span>
					</div>

					{password && <div className='col-auto'></div>}
					{isLoggedIn ? (
						<>
							<p>¡Has iniciado sesión correctamente!</p>
							{/* <button id='botLog'>Cerrar sesión</button> */}
						</>
					) : (
						<>
							<button id='botLog' onClick={handleLogin}>
								Únete ahora
							</button>
							<div>
								<span>
									<Link to='/forgotten'>Forgot Password?</Link>
								</span>
							</div>
						</>
					)}
				</form>
			</div>
		</div>
	)
}

export default Login
