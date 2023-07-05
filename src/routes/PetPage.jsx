import React from 'react'
import PetForm from '../components/petForm'

const PetPage = () => {
	return (
		<div className='container vh-100' style={{ paddingTop: '6rem' }}>
			<div className='card-body'>
				<PetForm />
			</div>
		</div>
	)
}

export default PetPage
