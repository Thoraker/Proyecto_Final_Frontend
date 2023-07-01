import React from 'react'
import PetForm from '../components/petForm'

const PetPage = () => {
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
