import React, { useContext } from 'react'
import { AppContext } from './App'

const UserPage = () => {
	const state = useContext(AppContext)
	console.log(state)

	return (
		<div className='card text-center'>
			<div className='card-header'>
				<ul className='nav nav-tabs card-header-tabs'>
					<li className='nav-item'>
						<a className='nav-link active' aria-current='true' href='#'>
							Active
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Link
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link disabled'>Disabled</a>
					</li>
				</ul>
			</div>
			<div className='card-body'>
				<h5 className='card-title'>Special title treatment</h5>
				<p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
				<a href='#' className='btn btn-primary'>
					Go somewhere
				</a>
			</div>
		</div>
	)
}

export default UserPage
