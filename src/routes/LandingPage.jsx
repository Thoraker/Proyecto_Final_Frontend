import React, { useContext } from 'react'
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
