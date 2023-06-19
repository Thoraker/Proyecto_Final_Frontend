import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<main>
			<div className='container'>
				<div className='wrapper position-absolute top-50'>
					<form action=''>
						<img
							src='https://img.pikbest.com/backgrounds/20190924/technology-background-with-blue-gradient-background-v_1559315jpg!w700wp'
							alt=''
						/>
						<input className='diseño' type='text' placeholder='Name'/>
						<br />
						<input className='diseño' type='password' placeholder='Insert Password' aria-labelledby='passwordHelpInline' />
						<br />
						<div className='col-auto'>
							<span id='passwordHelpInline' className='form-text'>
								Must be 8-20 characters long.
							</span>
						</div>
						<input type='submit' value='LOG IN' />
						<br />
						<span>
							<Link to='/forgotpassword'>Forgot Password?</Link>
						</span>
					</form>
				</div>
			</div>
		</main>
	)
}

export default Login
