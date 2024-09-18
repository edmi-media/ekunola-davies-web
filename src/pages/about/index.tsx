import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"

export default function Home() {
	return (
		<>
			<Seo title="About Us" />
			<Appbar />
			<main className="w-full bg-primary-teal/30">
				<div className="grid h-[50vh] w-full place-items-center bg-black/50 bg-auditorium-1 bg-cover bg-center bg-blend-overlay">
					<div className="flex flex-col items-center justify-between gap-6">
						<h2 className="text-7xl font-extrabold text-white">About Us</h2>
					</div>
				</div>
				<section className="w-full py-10 lg:py-20"></section>
			</main>
			<Footer />
		</>
	)
}
