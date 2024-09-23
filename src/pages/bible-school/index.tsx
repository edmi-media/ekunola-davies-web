import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"

export default function Page() {
	return (
		<>
			<Seo title="Word & Vision School of Ministry" />
			<Appbar />
			<main className="w-full bg-primary-teal/30">
				<div className="grid h-[50vh] w-full place-items-center bg-black/50 bg-auditorium-1 bg-cover bg-center bg-blend-overlay">
					<div className="flex flex-col items-center justify-between gap-6">
						<h2 className="text-center text-5xl font-extrabold text-white lg:text-7xl">
							Word & Vision School of Ministry
						</h2>
					</div>
				</div>
				<section className="w-full py-10 lg:py-20"></section>
			</main>
			<Footer />
		</>
	)
}
