import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import getState from '../resources/Flux'
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
	}, [state.store.usuario])

	return (
		<AppContext.Provider value={state}>
			<div className='container'>
				<Navbar />
			</div>
			<div className='row'>
				<Outlet />
			</div>
		</AppContext.Provider>
	)
}

export default App
