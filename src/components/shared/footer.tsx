import Image from "next/image"
import Link from "next/link"
import React from "react"

import { footer_links, social_links } from "@/config"
import { LogoLight } from "@/assets/images"

export const Footer = () => {
	return (
		<footer className="w-screen bg-neutral-900 py-10 text-neutral-100">
			<div className="container mx-auto flex flex-col">
				<div className="flex w-full flex-col items-center justify-center gap-20 py-10">
					<div className="flex w-full flex-1 items-start justify-between">
						{footer_links.map((item, index) => (
							<div key={index} className="flex flex-1 flex-col gap-4">
								<h5 className="text-sm font-semibold uppercase">{item.label}</h5>
								<div className="flex flex-col gap-2">
									{item.links.map((link, index) => (
										<Link
											key={index}
											href={link.url}
											className="link white text-lg capitalize text-white">
											{link.name}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
					<div className="flex w-full flex-col items-center gap-5 lg:gap-10">
						<div className="min-w-[300px] max-w-[350px]">
							<Link href="/">
								<Image src={LogoLight} alt="ekunola davies ministry intl" className="" />
							</Link>
						</div>
						<div className="flex w-full flex-col items-center gap-6 text-center lg:max-w-[40%]">
							<p className="font-medium lg:text-xl">
								Rehoboth Prayer Mountain, Araromi Village, Iyana-Oteyi, Papa-Ilaro, Ogun State.
							</p>
						</div>
					</div>
				</div>
				<hr className="my-4" />
				<div className="flex w-full items-center justify-between text-sm">
					<p>
						&copy;{new Date().getFullYear()}. Ekunola Davies Ministry Int&apos;l. All rights
						reserved.
					</p>
					<div className="flex items-center gap-4">
						{social_links.map((link, index) => (
							<a key={index} href={link.url} target="_blank">
								<link.icon size={24} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
