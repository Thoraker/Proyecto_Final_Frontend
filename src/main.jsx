import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './routes/App.jsx'
import ErrorPage from './routes/ErrorPage'
import LandingPage from './routes/LandingPage'
import UserPage from './routes/UserData'
import FoundationsPage from './routes/FoundationsPage'
import RegisterPage from './routes/RegisterPage'
import RegisterForm from './components/registerForm'
import AdoptMe from './routes/AdoptMe'
import AddressForm from './components/addressForm.jsx'
import PetPage from './routes/PetPage.jsx'
import InvitePage from './routes/InvitePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <LandingPage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
			{
				path: '/pet',
				element: <PetPage />,
			},
			{
				path: '/adoption',
				element: <AdoptMe />,
			},
			{
				path: '/foundations',
				element: <FoundationsPage />,
			},
			{
				path: '/address',
				element: <AddressForm />,
			},
			{
				path: '/user',
				element: <UserPage />,
			},
			{
				path: '/invite',
				element: <InvitePage />,
			},
			{
				path: '/post',
				element: <RegisterForm />,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
