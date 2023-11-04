import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Suspense } from 'react'
import Preloader from '../screens/Preloader'

const Layout = () => {
	return (
		<>
			<Header />
			<main className="container flex flex-col flex-auto relative border-x-[3px] border-solid border-x-[#181818] overflow-y-auto">
				<Suspense fallback={<Preloader />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	)
}

export default Layout
