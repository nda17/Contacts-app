import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import './assets/styles/index.scss'
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const Contacts = lazy(() => import('./pages/Contacts'))
const NewContact = lazy(() => import('./pages/NewContact'))
const EditContact = lazy(() => import('./pages/EditContact'))

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Contacts />} />
					<Route path="/:add-contacts" element={<NewContact />}></Route>
					<Route path="/:edit-contact" element={<EditContact />}></Route>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
