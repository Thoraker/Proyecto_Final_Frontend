import React, { useContext } from 'react'
import Carousel from '../components/carousel'
import { AppContext } from './App'


const LandingPage = () => {
	const state = useContext(AppContext)
	console.log(state)
	return (
		<div>
			<h1>Dame una Pata</h1>
			<p>Bienvenido a la aplicación, busca una mascota para darle una pata</p>
			<div className='container-fluid' style={{ height: '600px', width: '860px' }}>
				<Carousel />
				
			</div>
		</div>
	)
}

export default LandingPage
