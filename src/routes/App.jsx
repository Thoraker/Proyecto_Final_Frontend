import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import getState from '../resources/Flux'
import Sidebar from '../components/sideBar'
import Navbar from '../components/navbar'


export const AppContext = createContext(null)

const App = () => {
	const [state, setState] = useState(
		getState({
			getStore: () => state.store,
			getActions: () => state.actions,
			setStore: (updatedStore) =>
				setState({
					store: Object.assign(state.store, updatedStore),
					actions: { ...state.actions },
				}),
		})
	)

	useEffect(() => {
		state.actions.loadInitialData()
	}, [])

	return (
		<AppContext.Provider value={state}>
			<div className='row'>
				<Navbar />				
				<div className='col-2 me-0 pe-0'>
					<Sidebar />
				</div>
				<div className='col'>
					<Outlet />
				</div>
			</div>
		</AppContext.Provider>
	)
}

export default App
