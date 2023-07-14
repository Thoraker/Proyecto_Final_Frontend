import React, { useContext } from 'react'
import { AppContext } from './App'
import Pagina from '../components/landingPage'
// import HomePage from '../components/homePrueba'

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
