import React, { useContext } from 'react'
import { AppContext } from './App'
import AddressForm from '../components/addressForm'

const AddressPage = () => {
	const state = useContext(AppContext)
	console.log(state)

	return (
		<div className='card'>
			<div className='card-header'>
				<h5 className='card-title'>Mis Direcciones</h5>
			</div>
			<div className='card-body'>
				<AddressForm />
			</div>
		</div>
	)
}

export default AddressPage
