import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage'
import App from './routes/App'
import './index.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>Hello world!</div>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <App />,
			},
		],
	},
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
