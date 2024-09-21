import Image from "next/image"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"

export default function Page() {
	return (
		<>
			<Seo title="Ekunola Davies" />
			<Appbar />
			<main className="w-full">
				<div className="relative grid h-screen w-full place-items-center">
					<div className="absolute left-0 top-0 !z-[2] flex h-full w-full flex-col items-center justify-end bg-black/50 py-20">
						<div className="text-white">
							<p className="font-medium lg:text-2xl">Prophetic Evangelist</p>
							<h1 className="font-light lg:text-9xl">Ekunola Davies</h1>
						</div>
					</div>
					<video
						src="/assets/videos/gtc-2020 - Trim.mp4"
						muted
						autoPlay
						loop
						className="h-screen w-full object-cover"></video>
				</div>
				<section className="container mx-auto grid grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2 lg:py-20">
					<div className="flex w-full flex-col gap-3">
						<p className="font-bold lg:text-2xl">Ekunola Davies</p>
						<h2 className="font-light lg:text-4xl">
							Ekunola Temitope Davies is a Nigerian preacher, the founder and president of
							Ekunola Davies Ministry International, also known as Genesis Team International.{" "}
							<br />
							Ekunola Davies is regarded as a pioneer in the Celestial Church of Christ.
						</h2>
					</div>
					<div className="grid w-full place-items-center">
						<div className="relative aspect-[1/1.25] w-full lg:w-3/4">
							<Image
								src="/assets/images/oga.webp"
								alt="Ekunola Davies"
								fill
								sizes="(max-width:1024px)100%"
								className="object-cover"
							/>
						</div>
					</div>
				</section>
				<section className="container mx-auto flex flex-col items-center gap-10 py-10 lg:py-20"></section>
			</main>
			<Footer />
		</>
	)
}
