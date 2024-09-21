import React from "react"

import { DashboardLayout } from "@/components/layouts"
import { Seo } from "@/components/shared"

const Dashboard = () => {
	return (
		<>
			<Seo title="Settings" />
			<DashboardLayout>
				<div className="h-full w-full p-5">Settings</div>
			</DashboardLayout>
		</>
	)
}

export default Dashboard
