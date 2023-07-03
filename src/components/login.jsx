import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../routes/App'
import { PiPawPrintBold } from 'react-icons/pi'
import { GiEternalLove, GiHealthIncrease, GiLifeBar } from 'react-icons/gi'
import { TbPigMoney } from 'react-icons/tb'
// GiHealing GiLifeBar

const Login = () => {
	const state = useContext(AppContext)
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div
			className='container-fluid vh-100 fst-italic m-4'
			style={{ background: 'linear-gradient(90deg, rgba(171,199,176,1) 16%, rgba(13,102,23,1) 60%)' }}
		>
			<div className='row  justify-content-around'>
				<div className='col-7'>
					<h1> Ventajas de adoptar una mascota </h1>
					<li>
						<ul className='rounded border border-success' style={{ borderWidth: '2px' }}>
							<GiLifeBar /> Salvar una vida: Al adoptar una mascota, estás brindándole una segunda
							oportunidad a un animal que puede haber experimentado abandono, maltrato o estar en riesgo
							de ser sacrificado en un refugio. Al darles un hogar amoroso, les das una nueva vida llena
							de felicidad.
						</ul>
						<ul className='rounded border border-success' style={{ borderWidth: '2px' }}>
							<GiEternalLove /> Compañía y amor incondicional: Tener una mascota en casa puede ayudar a
							combatir la soledad y brindar apoyo emocional de manera incondicional.
						</ul>
						<ul className='rounded border border-success' style={{ borderWidth: '2px' }}>
							<GiHealthIncrease /> Salud física y mental: Pasear a un perro te anima a hacer ejercicio, lo
							cual es beneficioso para tu bienestar. Además, interactuar con animales reduce el estrés y
							la ansiedad, y puede incluso disminuir la presión arterial.
						</ul>
						<ul className='rounded border border-success' style={{ borderWidth: '2px' }}>
							<TbPigMoney /> Costos más bajos: Adoptar una mascota suele ser más económico. Muchos
							refugios ya esterilizan, vacunan y microchipan a los animales antes de ser adoptados, lo que
							te ahorra dinero en cuidados iniciales.
						</ul>
					</li>
				</div>
				<div className='col rounded-3 bg-transparent mt-3'>
					<form
						className='w-75 h-75 text-center'
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
							className='fs-5  border-0 border-bottom bg-transparent my-2 mx-5'
							type='text '
							placeholder='Nombre de Usuario'
							value={user}
							onChange={(ev) => setUser(ev.target.value)}
						/>
						<input
							className='fs-5  border-0 border-bottom bg-transparent my-2 mx-5'
							type='password'
							placeholder='Contraseña'
							value={password}
							onChange={(ev) => setPassword(ev.target.value)}
						/>
						<label id='passwordHelpInline' className='form-text'>
							Entre 8 y 20 caracteres
						</label>
						<div className='mt-4'>
							<button
								type='submit'
								className='btn btn-outline-light mb-3 border-white rounded-pill'
								style={{ borderWidth: '2px' }}
							>
								Ingresar <PiPawPrintBold />
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
		</div>
	)
}

export default Login
