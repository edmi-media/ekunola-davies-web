import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"

import styles from "./appbar.module.scss"

const NAVIGATION = [
	{ name: "home", href: "/" },
	{ name: "about us", href: "/about" },
	{ name: "programs", href: "/programs" },
	{ name: "teachings", href: "/teachings" },
	{ name: "media", href: "/media" },
	{ name: "contact us", href: "/contact" },
]

export const Appbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const { pathname } = useRouter()

	const handleScroll = () => setScrolled(window.scrollY > 0)

	const isOnPath = (href: string) => pathname === href

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav className={classNames([styles.Appbar, styles[`Appbar--${scrolled}`]])}>
			<div className={styles.AppbarInner}>
				<div className={styles.AppbarLogo}>
					<Image
						src="/images/logo-dark.png"
						alt="edmi logo"
						fill
						sizes="(max-width) 100%"
						className="h-full w-full"
						priority
					/>
				</div>
				<div className={styles.AppbarList}>
					{NAVIGATION.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className={classNames([
								styles.AppbarListItem,
								styles[`AppbarListItem--${isOnPath(link.href)}`],
							])}>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	)
}
