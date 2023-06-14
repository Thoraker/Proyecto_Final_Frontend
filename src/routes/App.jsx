import './App.css'
import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import getState from '../resources/Flux'
import Carousel from '../components/carousel'

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
			<div id='carousel1'>
				<Carousel slides={state.store.slides} />
			</div>
			<Outlet />
		</AppContext.Provider>
	)
}

export default App
