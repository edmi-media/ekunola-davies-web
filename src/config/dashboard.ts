import {
	RiArticleLine,
	RiDashboardLine,
	RiLogoutBoxRLine,
	RiNewspaperLine,
	RiSettingsLine,
	RiUserLine,
	RiUserStarLine,
	RiVideoLine,
} from "@remixicon/react"

export const dashboard_links = [
	{
		section: "main",
		links: [
			{
				label: "Dashboard",
				icon: RiDashboardLine,
				to: "/dashboard",
			},
			{
				label: "Articles",
				icon: RiArticleLine,
				to: "/dashboard/articles",
			},
			{
				label: "Newsletter",
				icon: RiNewspaperLine,
				to: "/dashboard/newsletter",
			},
			{
				label: "Media",
				icon: RiVideoLine,
				to: "/dashboard/media",
			},
			{
				label: "Admins",
				icon: RiUserStarLine,
				to: "/dashboard/admins",
			},
		],
	},
	{
		section: "others",
		links: [
			{
				label: "Account",
				icon: RiUserLine,
				to: "/dashboard/account",
			},
			{
				label: "Settings",
				icon: RiSettingsLine,
				to: "/dashboard/settings",
			},
			{
				label: "Logout",
				icon: RiLogoutBoxRLine,
				to: "",
			},
		],
	},
]
