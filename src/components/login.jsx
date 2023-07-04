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
			className='container-fluid vh-100 fst-italic'
			style={{
				background: 'linear-gradient(90deg, rgba(171,199,176,1) 16%, rgba(13,102,23,1) 60%)',
				paddingTop: '6rem',
			}}
		>
			<div className='row m-3'>
				<div className='col-7 justify-content-around '>
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
							refugios ya esterilizan, vacunan y registran a los animales antes de ser adoptados
							colocándole el microchip correspondiente, lo que te ahorra dinero en cuidados iniciales.
						</ul>
					</li>
				</div>
				<div className='col-4 p-3 m-3'>
					<div className='card bg-transparent py-5 border-light'>
						<form
							onSubmit={(ev) => {
								ev.preventDefault()
								state.actions.login(user, password)
							}}
						>
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
									type='text '
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
							<div id='passwordHelpInline' className='form-text text-center'>
								Entre 8 y 20 caracteres
							</div>
							<div className='d-grid gap-2 col-6 mx-auto py-3'>
								<button
									type='submit'
									className='btn btn-outline-light border-white rounded-pill '
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
		</div>
	)
}

export default Login
