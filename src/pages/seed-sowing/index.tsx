import React from "react"

import { Appbar, Footer, Seo, TabPanel } from "@/components/shared"

const tabs = ["local", "international"] as const
type Tab = (typeof tabs)[number]

export default function Page() {
	const [currentTab, setCurrentTab] = React.useState<Tab>("local")

	return (
		<>
			<Seo title="Seed Sowing" />
			<Appbar />
			<main className="w-full bg-primary-teal/30">
				<div className="grid h-[50vh] w-full place-items-center bg-black/50 bg-auditorium-1 bg-cover bg-center bg-blend-overlay">
					<div className="flex flex-col items-center justify-between gap-6">
						<h2 className="text-5xl font-extrabold text-white lg:text-7xl">Seed Sowing</h2>
					</div>
				</div>
				<section className="flex w-full flex-col items-center gap-6 bg-white py-10 lg:py-20">
					<div className="mb-10 flex items-center rounded-md border border-black p-1">
						{tabs.map((tab, index) => (
							<button
								key={index}
								onClick={() => setCurrentTab(tab)}
								className={`flex min-w-[150px] items-center justify-center rounded-md px-3 py-2 font-medium capitalize transition-all duration-500 ${tab === currentTab ? "bg-black text-white" : ""}`}>
								{tab}
							</button>
						))}
					</div>
					<div className="w-full">
						<TabPanel index="local" tabValue={currentTab}></TabPanel>
						<TabPanel index="international" tabValue={currentTab}></TabPanel>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
