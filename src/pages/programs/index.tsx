import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { fade, programs } from "@/config"
import { useInterval } from "@/hooks"

const tabs = ["weekly", "monthly", "annual"] as const
type Tabs = (typeof tabs)[number]

export default function Page() {
	const [currentTab, setCurrentTab] = React.useState<Tabs>("weekly")
	const [current, setCurrent] = React.useState(0)

	const handleNext = () => setCurrent((prev) => (prev + 1) % programs.length)

	useInterval(handleNext, 10000)

	return (
		<>
			<Seo title="Programs" />
			<Appbar />
			<main className="w-full bg-primary-teal/30">
				<div className="grid h-[50vh] w-full place-items-center bg-black/50 bg-auditorium-1 bg-cover bg-center bg-blend-overlay">
					<div className="flex flex-col items-center justify-between gap-6">
						<h2 className="text-7xl font-extrabold text-white">Programs</h2>
					</div>
				</div>
				<section className="container mx-auto flex flex-col items-center py-10 lg:py-20">
					<div className="mb-10 flex items-center rounded-md border border-black p-1">
						{tabs.map((tab, index) => (
							<button
								key={index}
								onClick={() => setCurrentTab(tab)}
								className={`flex min-w-[100px] items-center justify-center rounded-md px-3 py-2 font-medium capitalize transition-all duration-500 ${tab === currentTab ? "bg-black text-white" : ""}`}>
								{tab}
							</button>
						))}
					</div>
					<div className="flex w-full items-center justify-center">
						{programs.map((program, index) => (
							<motion.div
								key={index}
								{...fade}
								className={`flex-col items-center gap-10 ${index === current ? "flex" : "hidden"}`}>
								<div className="relative aspect-[3/2] w-full lg:w-[50%]">
									<Image
										src={program.image}
										alt={program.title}
										fill
										priority
										sizes="(max-width:1024px)100%"
										className="transition-all duration-500 group-hover:scale-105 group-hover:saturate-150"
									/>
								</div>
								<div className="flex w-full flex-col items-center gap-4 text-center">
									<h2 className="w-full font-light lg:text-5xl">{program.title}</h2>
									<p className="font-medium lg:max-w-[75%] lg:text-xl">{program.description}</p>
									<div>
										<p className="font-medium lg:text-lg">{program.location}</p>
										<p className="font-medium lg:text-lg">{program.time}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
