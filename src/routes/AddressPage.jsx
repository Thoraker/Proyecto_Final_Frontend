import React from 'react'
import AddressForm from '../components/addressForm'

const AddressPage = () => {
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
