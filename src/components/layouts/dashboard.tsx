import { RiNotification3Line } from "@remixicon/react"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { useUserStore } from "@/store/z-stores"
import { useAppHeader } from "./app-header"
import { LogoDark } from "@/assets/images"
import { dashboard_links } from "@/config"
import { Button } from "../ui/button"
import { normalized } from "@/lib"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog"

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = React.useState(false)
	const { pathname } = useRouter()
	const { user } = useUserStore()

	const isOnRoute = (route: string) => route === normalized(pathname)
	return (
		<div className="flex h-screen w-screen overflow-hidden bg-white">
			<aside className="h-full w-[250px] border-r">
				<div className="flex h-20 w-full flex-col justify-center border-b p-4">
					<Link href="/">
						<Image
							src={LogoDark}
							alt="ekunola davies ministry intl"
							className="aspect-[2.6/1] w-[100px]"
						/>
					</Link>
				</div>
				<div className="flex h-[calc(100vh-80px)] w-full flex-col gap-20 py-4">
					{dashboard_links.map((dashboard) => (
						<div key={dashboard.section} className="flex w-full flex-col gap-2">
							<p className="px-4 text-xs uppercase text-neutral-400">{dashboard.section}</p>
							<div className="flex w-full flex-col">
								{dashboard.links.map(({ icon: Icon, label, to }, index) =>
									to ? (
										<Link
											key={index}
											href={to}
											className={`flex w-full items-center gap-2 px-4 py-5 hover:bg-neutral-200 ${isOnRoute(to) ? "bg-primary-teal/50 font-semibold hover:bg-primary-teal/50" : ""}`}>
											<Icon size={20} />
											<span className="text-sm font-medium">{label}</span>
										</Link>
									) : (
										<Dialog key={index} open={open} onOpenChange={setOpen}>
											<DialogTrigger asChild>
												<button
													key={index}
													className={`flex w-full items-center gap-2 px-4 py-5 text-red-700 hover:bg-red-200`}>
													<Icon size={20} />
													<span className="text-sm font-medium">{label}</span>
												</button>
											</DialogTrigger>
											<DialogContent className="w-[400px]">
												<DialogTitle>Logout</DialogTitle>
												<DialogDescription>Are you sure you want to logout?</DialogDescription>
												<div className="mt-4 grid w-full grid-cols-2 gap-4">
													<Button variant="destructive">Logout</Button>
													<Button onClick={() => setOpen(false)} variant="outline">
														Cancel
													</Button>
												</div>
											</DialogContent>
										</Dialog>
									)
								)}
							</div>
						</div>
					))}
				</div>
			</aside>
			<main className="h-full w-full flex-1">
				<nav className="flex h-20 w-full items-center justify-between border-b px-5">
					{useAppHeader(pathname)}
					<div className="flex h-full items-center gap-4">
						<Button size="icon" variant="outline">
							<RiNotification3Line size={20} />
						</Button>
						<div className="flex items-center gap-2">
							<div className="size-10 rounded-full border"></div>
							<div className="flex flex-col">
								<p className="font-heading">{user?.name}</p>
								<p className="text-xs text-neutral-400">{user?.email}</p>
							</div>
						</div>
					</div>
				</nav>
				<div className="h-[calc(100vh-80px)] w-full">{children}</div>
			</main>
		</div>
	)
}
