import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../routes/App'

const Login = () => {
	const state = useContext(AppContext)
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div
			className='container-fluid vh-100 fst-italic'
			style={{
				background: 'linear-gradient( 90deg, rgba(20,110,40,1) 20%, rgba(170,80,160,1) 80%)',
				paddingTop: '8rem',
			}}
		>
			<div className='row'>
				<div className='col'></div>
				<div className='col-3 bg-success bg-gradient card gap-2'>
					<form
						className='vstack gap-3 text-center my-5 p-3'
						onSubmit={(ev) => {
							ev.preventDefault()
							state.actions.login(user, password)
						}}
					>
						<div className=''>
							<img
								className='rounded-pill w-25 img-fluid'
								src='https://img.freepik.com/vector-premium/perfil-avatar-ilustraciones-vectoriales-sitio-web-redes-sociales-icono-perfil-usuario_495897-224.jpg?'
								alt='Avatar'
							/>
						</div>
						<div className=''>
							<input
								className='bg-transparent border-0 border-bottom w-100'
								style={{ color: 'white' }}
								type='text'
								placeholder='Nombre de Usuario'
								value={user}
								onChange={(ev) => setUser(ev.target.value)}
							/>
						</div>
						<div className=''>
							<input
								className='bg-transparent border-0 border-bottom w-100'
								type='password'
								placeholder='Contraseña'
								value={password}
								onChange={(ev) => setPassword(ev.target.value)}
							/>
						</div>
						<div className='form-text'>Entre 8 y 20 caracteres</div>
						<div className=''>
							<button type='submit' className='btn btn-primary'>
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
				<div className='col'></div>
			</div>
		</div>
	)
}

export default Login
