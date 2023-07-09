import React, { useContext } from 'react'
import { AppContext } from '../routes/App'
import PetAdoptionCard from './petAdoptionCard'

const ForAdoption = () => {
	const state = useContext(AppContext)

	return (
		<div className='row row-cols-1 row-cols-md-4 g-4'>
			{state.store.For_Adoption.map((pet, index) => {
				return (
					<div className='col' key={index}>
						<PetAdoptionCard pet={pet} />
					</div>
				)
			})}
		</div>
	)
}

export default ForAdoption
