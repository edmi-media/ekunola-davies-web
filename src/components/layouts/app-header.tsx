import React from "react"
import {
	RiArticleLine,
	RiDashboardLine,
	RiNewspaperLine,
	RiSettingsLine,
	RiUserLine,
	RiUserStarLine,
	RiVideoLine,
} from "@remixicon/react"

import { normalized } from "@/lib"

export const useAppHeader = (pathname: string) => {
	const handleRouteChange = (pathname: string) => {
		const path = normalized(pathname)
		switch (path) {
			case "/dashboard":
				return <DefaultHeader />
			case "/dashboard/articles":
				return <ArticleHeader />
			case "/dashboard/newsletter":
				return <NewsletterHeader />
			case "/dashboard/media":
				return <MediaHeader />
			case "/dashboard/admins":
				return <AdminHeader />
			case "/dashboard/account":
				return <AccountHeader />
			case "/dashboard/settings":
				return <SettingsHeader />
			default:
				return <DefaultHeader />
		}
	}

	const header = React.useMemo(() => {
		return handleRouteChange(pathname)
	}, [pathname])

	return header
}

const DefaultHeader = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="grid size-10 place-items-center rounded-full bg-primary-teal">
				<RiDashboardLine size={20} />
			</div>
			<h3 className="text-xl font-semibold">Dashboard</h3>
		</div>
	)
}

const ArticleHeader = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="grid size-10 place-items-center rounded-full bg-primary-teal">
				<RiArticleLine size={20} />
			</div>
			<h3 className="text-xl font-semibold">Articles</h3>
		</div>
	)
}

const NewsletterHeader = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="grid size-10 place-items-center rounded-full bg-primary-teal">
				<RiNewspaperLine size={20} />
			</div>
			<h3 className="text-xl font-semibold">Newsletter</h3>
		</div>
	)
}

const MediaHeader = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="grid size-10 place-items-center rounded-full bg-primary-teal">
				<RiVideoLine size={20} />
			</div>
			<h3 className="text-xl font-semibold">Media</h3>
		</div>
	)
}

const AdminHeader = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="grid size-10 place-items-center rounded-full bg-primary-teal">
				<RiUserStarLine size={20} />
			</div>
			<h3 className="text-xl font-semibold">Admins</h3>
		</div>
	)
}

const AccountHeader = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="grid size-10 place-items-center rounded-full bg-primary-teal">
				<RiUserLine size={20} />
			</div>
			<h3 className="text-xl font-semibold">Account</h3>
		</div>
	)
}

const SettingsHeader = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="grid size-10 place-items-center rounded-full bg-primary-teal">
				<RiSettingsLine size={20} />
			</div>
			<h3 className="text-xl font-semibold">Settings</h3>
		</div>
	)
}
