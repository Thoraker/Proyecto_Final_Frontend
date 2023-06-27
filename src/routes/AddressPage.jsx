import React, { useContext } from 'react'
import { AppContext } from './App'

const AddressPage = () => {
	const state = useContext(AppContext)
	console.log(state)

	return (
		<div className='card'>
			<div className='card-header'>
				<h5 className='card-title'>Mis Direcciones</h5>
			</div>
			<div className='card-body'>
				<p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
			</div>
		</div>
	)
}

export default AddressPage
