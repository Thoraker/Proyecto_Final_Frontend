import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div
			className='container m-5 h-75 w-50'
			style={{
				backgroundImage:
					'url(https://static.videezy.com/system/resources/thumbnails/000/000/326/original/Bokeh_Background.jpg)',
				backgroundSize: 'cover',
			}}
		>
			<div className='row mx-auto p-5'>
				<img
					className='img-flex w-75 mx-auto mb-5'
					src='https://img.pikbest.com/backgrounds/20190924/technology-background-with-blue-gradient-background-v_1559315jpg!w700wp'
					alt=''
				/>
				<div className='col '>
					<form action=''>
						<input type='text' defaultValue='Name' />

						<input type='password' defaultValue='Insert Password' aria-labelledby='passwordHelpInline' />

						<div className='col-auto'>
							<span id='passwordHelpInline' className='form-text'>
								Must be 8-20 characters long.
							</span>
						</div>
						<input type='submit' value='LOG IN' />

						<span>
							<Link to='/forgotpassword'>Forgot Password?</Link>
						</span>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
