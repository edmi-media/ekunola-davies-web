import Link from "next/link"
import React from "react"

import { DashboardLayout } from "@/components/layouts"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/shared"

const filters = ["all", "published", "draft", "archived"]

const Dashboard = () => {
	const [filter, setFilter] = React.useState("all")

	return (
		<>
			<Seo title="Media" />
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-6 p-5">
					<div className="flex w-full items-center justify-between">
						<div className="flex w-fit items-center rounded-md border p-1">
							{filters.map((item, index) => (
								<button
									key={index}
									className={`min-w-[150px] rounded-md px-4 py-2 text-sm font-medium capitalize transition-all duration-500 ${filter === item ? "bg-primary-teal" : "bg-transparent"} `}
									onClick={() => setFilter(item)}>
									{item}
								</button>
							))}
						</div>
						<Link href="/dashboard/media/new">
							<Button>Add New</Button>
						</Link>
					</div>
					<div className="h-full w-full rounded-2xl border"></div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Dashboard
