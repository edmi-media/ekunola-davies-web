import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

import { LogoDark } from "assets/images"
import { NavLinks } from "constants"

const navbar = () => {
	const [scrolled, setScrolled] = useState(false)

	const handleScrolled = () => setScrolled(window.scrollY > 700)

	useEffect(() => {
		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	}, [])

	return (
		<nav
			className={`left-0 top-0 !z-[5] flex w-full items-center justify-between border-b px-5 py-6 shadow-md lg:px-20 ${scrolled ? "fixed" : "static"}`}>
			<Link to="/">
				<img src={LogoDark} alt="edmin-logo" className="w-[100px]" />
			</Link>

			<div className="flex items-center gap-3">
				{NavLinks.map((link) => (
					<NavLink
						key={link.name}
						to={link.href}
						className={({ isActive }) =>
							`link ${isActive ? "text-brand-light" : "text-dark-400"}`
						}>
						{link.name}
					</NavLink>
				))}
			</div>
		</nav>
	)
}

export default navbar
