import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<div>
			<Link to='/'>Home</Link>
			<Link to='/login'>Login</Link>
		</div>
	)
}

export default Sidebar
