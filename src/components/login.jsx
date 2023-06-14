import React from 'react'
import './login.css'
const Login = () => {
	return (
		<main>
			<div className='wrapper'>
				<form action=''>
					<img
						src='https://img.pikbest.com/backgrounds/20190924/technology-background-with-blue-gradient-background-v_1559315jpg!w700wp'
						alt=''
					/>
					<input type='text' defaultValue='Name' />
					<br />
					<input type='password' defaultValue='Insert Password' aria-labelledby='passwordHelpInline' />
					<br />
					<div className='col-auto'>
						<span id='passwordHelpInline' className='form-text'>
							Must be 8-20 characters long.
						</span>
					</div>
					<input type='submit' value='LOG IN' />
					<br />
					<span>
						<a href='#'>Forgot Password?</a>
					</span>
				</form>
			</div>
		</main>
	)
}

export default Login
