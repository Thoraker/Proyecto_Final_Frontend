import React from 'react'

const Register = () => {
	return (
		<form className='container-fluid g-3'>
			<div className='row'>
				<div className='col-4'>
					<img className='img-fluid rounded-5' src='src/assets/invitado.png' alt='' />
				</div>
				<div className='col-5 align-self-center'>
					<label htmlFor='userName' className='form-label'>
						Nombre de Usuario
					</label>
					<input type='text' className='form-control' name='userName' id='userName' placeholder='Usuario' />
				</div>
				<div className='col-3 align-self-center'>
					<label htmlFor='validationCustom04' className='form-label'>
						Elige tu Avatar
					</label>
					<select className='form-select' id='Avatar' required>
						<option selected disabled value=''>
							Choose...
						</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
				</div>
			</div>
			<div className='col-4'>
				<label htmlFor='password1' className='form-label'>
					Contraseña
				</label>
				<input type='password' className='form-control' name='password' id='password' />
			</div>
			<div className='col-4'>
				<label htmlFor='password2' className='form-label'>
					Repite tu contraseña
				</label>
				<input type='password' className='form-control' name='password' id='password' />
			</div>
			<div className='col-4'>
				<label htmlFor='firstName' className='form-label'>
					First name
				</label>
				<input type='text' className='form-control' name='firstName' id='firstName' placeholder='Nombres' />
			</div>
			<div className='col-4'>
				<label htmlFor='lastName' className='form-label'>
					Last name
				</label>
				<input type='text' className='form-control' name='lastName' id='lastName' placeholder='Apellidos' />
			</div>
			<div className='col-3'>
				<label htmlFor='validationCustom05' className='form-label'>
					Zip
				</label>
				<input type='text' className='form-control' id='validationCustom05' required />
				<div className='invalid-feedback'>Please provide a valid zip.</div>
			</div>
			<div className='col-12'>
				<div className='form-check'>
					<input className='form-check-input' type='checkbox' value='' id='invalidCheck' required />
					<label className='form-check-label' htmlFor='invalidCheck'>
						Agree to terms and conditions
					</label>
					<div className='invalid-feedback'>You must agree before submitting.</div>
				</div>
			</div>
			<div className='col-12'>
				<button className='btn btn-primary' type='submit'>
					Submit form
				</button>
			</div>
		</form>
	)
}

export default Register
