import { Outlet } from "react-router-dom"

import { Footer, Navbar } from "components"

const main = () => {
	return (
		<>
			<Navbar />
			<main className="w-full">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default main
