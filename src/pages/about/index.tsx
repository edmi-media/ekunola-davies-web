import Link from "next/link"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"

export default function Page() {
	return (
		<>
			<Seo title="About Us" />
			<Appbar />
			<main className="w-full bg-primary-teal/30">
				<div className="grid h-[50vh] w-full place-items-center bg-black/50 bg-auditorium-1 bg-cover bg-center bg-blend-overlay">
					<div className="flex flex-col items-center justify-between gap-6">
						<h2 className="text-5xl font-extrabold text-white lg:text-7xl">About Us</h2>
					</div>
				</div>
				<section className="w-full bg-white px-4 py-10 lg:px-0 lg:py-20">
					<div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2">
						<div className="flex w-full flex-col justify-center gap-6">
							<p className="font-medium lg:text-2xl">Ekunola Davies Ministry Int&apos;l</p>
							<h2 className="text-3xl font-light lg:text-5xl">
								We are a evangelistic ministry born into Celestial Church of Christ throught the
								call of God upon His anointed veseel,{" "}
								<Link href="/ekunola-davies" className="underline">
									Evangelist Ekunola Davies
								</Link>
								, in the year 2001. Over the years, God has recruited many co-laborers by Himself
								and through the field exploits of the man of God. Together, we are saddled with
								the vison of raising champions that will reign with Jesus Christ on earth and in
								heaven.
							</h2>
						</div>
						<div className="w-full"></div>
					</div>
				</section>
				<section className="container mx-auto px-4 py-10 lg:px-0 lg:py-20"></section>
			</main>
			<Footer />
		</>
	)
}
