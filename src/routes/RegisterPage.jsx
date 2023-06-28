import React from 'react'
import SignupForm from '../components/experimentalRegisterForm'

const RegisterPage = () => {
	return (
		<div className='container card text-bg-secondary mb-3'>
			<div className='card-header'>
				<h3>Registro</h3>
			</div>
			<div className='card-body'>
				<SignupForm />
			</div>
		</div>
	)
}

export default RegisterPage
