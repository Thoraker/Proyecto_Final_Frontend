import React, { useContext } from 'react'
import { AppContext } from './App'
import RegisterForm from '../components/registerForm'

const DataPage = () => {
	const state = useContext(AppContext)
	console.log(state)

	return (
		<div className='card'>
			<div className='card-header'>
				<h5 className='card-title'>Mis Datos</h5>
			</div>
			<div className='card-body'>
				<RegisterForm />
			</div>
		</div>
	)
}

export default DataPage
