import React, { useContext } from 'react'
import { AppContext } from './App'
import PetForm from '../components/petForm'

const PetPage = () => {
	const state = useContext(AppContext)
	console.log(state)

	return (
		<div className='card'>
			<div className='card-header'>
				<h5 className='card-title'>Mis Mascotas</h5>
			</div>
			<div className='card-body'>
				<PetForm />
			</div>
		</div>
	)
}

export default PetPage
