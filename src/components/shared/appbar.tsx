import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import { LogoDark } from "@/assets/images"
import { nav_links } from "@/config"

export const Appbar = () => {
	const [isScrolled, setIsScrolled] = React.useState(false)

	const handleScrolled = () => setIsScrolled(window.scrollY > 200)

	React.useEffect(() => {
		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	})

	return (
		<nav
			className={`fixed left-0 top-0 !z-10 flex h-[120px] w-screen items-center justify-center py-4 transition-all duration-500 ${isScrolled ? "bg-white/30 backdrop-blur backdrop-filter" : "bg-transparent"}`}>
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center">
					<Link href="/">
						<Image
							src={LogoDark}
							alt="ekunola davies ministry intl"
							className="aspect-[2.6/1] w-[100px]"
						/>
					</Link>
					<div className="mx-7 h-9 w-[1px] bg-neutral-400" />
					<div className="flex items-center gap-4">
						{nav_links.map((link, index) => (
							<Link
								key={index}
								href={link.url}
								className={`link font-medium capitalize ${isScrolled ? "black text-neutral-900" : "white text-white"}`}>
								{link.label}
							</Link>
						))}
					</div>
				</div>
				<Link href="/seed-sowing">
					<Button size="lg">Seed Sowing</Button>
				</Link>
			</div>
		</nav>
	)
}
