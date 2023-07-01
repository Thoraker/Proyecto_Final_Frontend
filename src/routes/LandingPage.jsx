import React, { useContext } from 'react'
// import Carousel from '../components/carousel'
import { AppContext } from './App'
import Pagina from '../components/landingPage'

const LandingPage = () => {
	const state = useContext(AppContext)
	console.log(state)
	return (
		<div>
			<Pagina />
		</div>
	)
}

export default LandingPage
