import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../routes/App'
import UserInfo from '../components/userInfo'
import PetInfo from '../components/petInfo'
import AddressInfo from '../components/addressInfo'
import PetForm from '../components/petForm'
import AddressForm from '../components/addressForm'

const UserPage = () => {
	const state = useContext(AppContext)
	const [petView, setPetView] = useState(<AddressForm />)
	const [addressView, setAddressView] = useState(<AddressForm />)

	useEffect(() => {
		if (state.store.User.UserData.Mascotas.length === 0) {
			setPetView(<PetForm />)
		} else setPetView(<PetInfo />)

		if (state.store.User.UserData.Direcciones.length === 0) {
			setAddressView(<AddressForm />)
		} else setAddressView(<AddressInfo />)
	}, [])

	return (
		<div className='card' style={{ paddingTop: '6rem' }}>
			<ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
				<li className='nav-item' role='presentation'>
					<button
						className='nav-link active'
						id='pills-home-tab'
						data-bs-toggle='pill'
						data-bs-target='#pills-home'
						type='button'
						role='tab'
						aria-controls='pills-home'
						aria-selected='true'
					>
						Mis Datos
					</button>
				</li>
				<li className='nav-item' role='presentation'>
					<button
						className='nav-link'
						id='pills-profile-tab'
						data-bs-toggle='pill'
						data-bs-target='#pills-profile'
						type='button'
						role='tab'
						aria-controls='pills-profile'
						aria-selected='false'
					>
						Mis Mascotas
					</button>
				</li>
				<li className='nav-item' role='presentation'>
					<button
						className='nav-link'
						id='pills-contact-tab'
						data-bs-toggle='pill'
						data-bs-target='#pills-contact'
						type='button'
						role='tab'
						aria-controls='pills-contact'
						aria-selected='false'
					>
						Mis Direcciones
					</button>
				</li>
				<li className='nav-item' role='presentation'>
					<button
						className='nav-link'
						id='pills-disabled-tab'
						data-bs-toggle='pill'
						data-bs-target='#pills-disabled'
						type='button'
						role='tab'
						aria-controls='pills-disabled'
						aria-selected='false'
						disabled
					>
						Disabled
					</button>
				</li>
			</ul>
			<div className='tab-content' id='pills-tabContent'>
				<div
					className='tab-pane fade show active'
					id='pills-home'
					role='tabpanel'
					aria-labelledby='pills-home-tab'
					tabIndex='0'
				>
					<UserInfo />
				</div>
				<div
					className='tab-pane fade'
					id='pills-profile'
					role='tabpanel'
					aria-labelledby='pills-profile-tab'
					tabIndex='0'
				>
					{petView}
				</div>
				<div
					className='tab-pane fade'
					id='pills-contact'
					role='tabpanel'
					aria-labelledby='pills-contact-tab'
					tabIndex='0'
				>
					{addressView}
				</div>
				<div
					className='tab-pane fade'
					id='pills-disabled'
					role='tabpanel'
					aria-labelledby='pills-disabled-tab'
					tabIndex='0'
				>
					...
				</div>
			</div>
		</div>
	)
}

export default UserPage
