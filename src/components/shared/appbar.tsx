import { RiMenu4Line } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import { LogoDark } from "@/assets/images"
import { nav_links } from "@/config"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet"

export const Appbar = () => {
	const [isScrolled, setIsScrolled] = React.useState(false)
	const [isOpen, setIsOpen] = React.useState(false)

	const handleScrolled = () => setIsScrolled(window.scrollY > 200)

	React.useEffect(() => {
		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	})

	return (
		<nav
			className={`fixed left-0 top-0 !z-10 flex h-fit w-screen items-center justify-center px-4 py-4 transition-all duration-500 lg:h-[120px] lg:px-0 ${isScrolled ? "bg-white/30 backdrop-blur backdrop-filter" : "bg-transparent"}`}>
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
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<button
								className={`inline-flex items-center justify-center lg:hidden ${isScrolled ? "text-neutral-900" : "text-white"}`}>
								<RiMenu4Line />
							</button>
						</SheetTrigger>
						<SheetContent side="left" className="w-full max-w-[75%] bg-white">
							<SheetTitle hidden>Navigation</SheetTitle>
							<SheetDescription hidden></SheetDescription>
							<div className="flex h-full w-full flex-col justify-between">
								<div className="flex flex-col gap-6">
									<Link href="/">
										<Image
											src={LogoDark}
											alt="ekunola davies ministry intl"
											className="aspect-[2.6/1] w-[100px]"
										/>
									</Link>
									<div className="flex flex-col gap-4">
										{nav_links.map((link, index) => (
											<Link
												key={index}
												href={link.url}
												onClick={() => setIsOpen(false)}
												className="link black font-medium capitalize text-neutral-900">
												{link.label}
											</Link>
										))}
									</div>
									<Link href="/seed-sowing">
										<Button>Seed Sowing</Button>
									</Link>
								</div>
								<p className="text-center text-sm text-neutral-900">
									&copy;{new Date().getFullYear()}. Ekunola Davies Ministry Int&apos;l
								</p>
							</div>
						</SheetContent>
					</Sheet>
					<div className="hidden items-center gap-4 lg:flex">
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
				<Link href="/seed-sowing" className="hidden lg:block">
					<Button size="lg">Seed Sowing</Button>
				</Link>
			</div>
		</nav>
	)
}
