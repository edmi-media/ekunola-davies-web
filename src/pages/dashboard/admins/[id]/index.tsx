import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import React from "react"

import { DashboardLayout } from "@/components/layouts"
import { GetAdminQuery } from "@/queries"
import { Seo } from "@/components/shared"

const Page = () => {
	const router = useRouter()
	const { id } = router.query

	const { data } = useQuery({
		queryFn: () => GetAdminQuery(String(id)),
		queryKey: ["get-admin", id],
		enabled: !!id,
	})

	if (!data) return null
	console.log(data)

	return (
		<>
			<Seo />
			<DashboardLayout>
				<div className="h-full w-full"></div>
			</DashboardLayout>
		</>
	)
}

export default Page
