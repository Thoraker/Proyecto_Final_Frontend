import React, { useContext } from 'react'
import { AppContext } from './App'
import HomePage from '../components/homePrueba'

const LandingPage = () => {
	const state = useContext(AppContext)
	console.log(state)
	return (
		<div>
			<HomePage />
		</div>
	)
}

export default LandingPage
