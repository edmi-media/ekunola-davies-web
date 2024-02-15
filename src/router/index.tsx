import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { MainLayout } from "layouts"
import { About, Home } from "pages"

const Router = () => {
	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default Router
