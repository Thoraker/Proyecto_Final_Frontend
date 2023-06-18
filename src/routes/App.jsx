import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import getState from '../resources/Flux'
import Sidebar from '../components/sideBar'
import './App.css'
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
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-2'>
						<Sidebar />
					</div>
					<div className='col'>
						{/* <Carousel /> */}
						<Outlet />
					</div>
				</div>
			</div>
		</AppContext.Provider>
	)
}

export default App
