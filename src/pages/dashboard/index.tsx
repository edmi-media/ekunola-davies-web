import React from "react"

import { DashboardLayout } from "@/components/layouts"
import { useUserStore } from "@/store/z-stores"
import { Seo } from "@/components/shared"

const Dashboard = () => {
	const { user } = useUserStore()

	return (
		<>
			<Seo title="Dashboard" />
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-6 overflow-y-scroll p-5">
					<h1 className="text-3xl">
						Welcome back, <b className="capitalize">{user?.name.split(" ")[1]}</b>
					</h1>
					<div className="flex w-full flex-col gap-4">
						<div className="flex w-full items-center justify-between">
							<p>Overview</p>
						</div>
						<div className="flex h-[150px] w-full items-center rounded-2xl border">
							<div className="h-full flex-1"></div>
							<div className="h-4/5 w-[1px] bg-neutral-300" />
							<div className="h-full flex-1"></div>
							<div className="h-4/5 w-[1px] bg-neutral-300" />
							<div className="h-full flex-1"></div>
							<div className="h-4/5 w-[1px] bg-neutral-300" />
							<div className="h-full flex-1"></div>
						</div>
					</div>
					<div className="flex w-full flex-col gap-4">
						<div className="flex w-full items-center justify-between">
							<p>Analytics</p>
						</div>
						<div className="grid w-full grid-cols-2 gap-5">
							{[...Array(2)].map((_, index) => (
								<div key={index} className="aspect-[2/1] w-full rounded-2xl border p-4"></div>
							))}
						</div>
					</div>
					<div className="flex w-full flex-col gap-4">
						<div className="flex w-full items-center justify-between">
							<p>Recent</p>
						</div>
						<div className="flex w-full flex-col gap-2 rounded-lg border p-4">
							{[...Array(10)].map((_, index) => (
								<div key={index} className="h-12 w-full rounded-md border"></div>
							))}
						</div>
					</div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Dashboard
