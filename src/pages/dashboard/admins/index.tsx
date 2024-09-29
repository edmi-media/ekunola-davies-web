import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import React from "react"

import { DashboardLayout } from "@/components/layouts"
import { UserRow } from "@/components/dashboard"
import { Button } from "@/components/ui/button"
import { GetAllAdminsQuery } from "@/queries"
import { Seo } from "@/components/shared"
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/shared/table"

const filters = ["all", "active", "inactive"] as const
type Filter = (typeof filters)[number]

const Dashboard = () => {
	const [filter, setFilter] = React.useState<Filter>("all")

	const { data: admins } = useQuery({
		queryFn: () => GetAllAdminsQuery(),
		queryKey: ["get-admins"],
	})

	if (!admins) return null

	const filtered = (filter: Filter) => {
		switch (filter) {
			case "all":
				return admins.data
			case "active":
				return admins.data.filter((admin) => admin.status === "active")
			case "inactive":
				return admins.data.filter((admin) => admin.status === "inactive")
			default:
				return admins.data
		}
	}

	return (
		<>
			<Seo title="Admins" />
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
						<Link href="/dashboard/admins/new">
							<Button>Add New</Button>
						</Link>
					</div>
					<div className="h-full w-full">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="min-w-[200px]">Name</TableHead>
									<TableHead className="min-w-[150px]">Email</TableHead>
									<TableHead className="w-[150px]">Role</TableHead>
									<TableHead className="w-[150px]">Status</TableHead>
									<TableHead className="w-[150px]">Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{filtered(filter).map((user) => (
									<UserRow key={user.id} user={user} />
								))}
							</TableBody>
						</Table>
					</div>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Dashboard
