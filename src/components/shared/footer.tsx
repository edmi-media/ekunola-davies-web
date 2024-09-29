import Image from "next/image"
import Link from "next/link"
import React from "react"

import { LogoLight } from "@/assets/images"
import { footer_links } from "@/config"

export const Footer = () => {
	return (
		<footer className="w-screen bg-neutral-900 px-4 py-10 text-neutral-100 lg:px-0">
			<div className="container mx-auto flex flex-col">
				<div className="flex w-full flex-wrap items-center gap-5 py-10 lg:gap-20">
					<div className="flex w-full flex-col gap-5 lg:max-w-[450px]">
						<div className="min-w-[300px] max-w-[350px]">
							<Link href="/">
								<Image src={LogoLight} alt="ekunola davies ministry intl" className="" />
							</Link>
						</div>
						<div className="flex w-full flex-col items-center gap-6">
							<p className="font-medium lg:text-lg">
								Rehoboth Prayer Mountain, Araromi Village, Iyana-Oteyi, Papa-Ilaro, Ogun State.
							</p>
						</div>
					</div>
					<div className="flex w-full flex-1 flex-wrap items-start justify-between gap-10 lg:gap-0">
						{footer_links.map((item, index) => (
							<div key={index} className="flex min-w-[250px] flex-1 flex-col gap-4">
								<h5 className="text-sm font-semibold uppercase lg:text-base">{item.label}</h5>
								<div className="flex flex-col gap-2">
									{item.links.map((link, index) => {
										if (link.external) {
											return (
												<a
													key={index}
													href={link.url}
													target="_blank"
													rel="noopener noreferrer"
													className="link white text-sm capitalize text-white lg:text-lg">
													{link.name}
												</a>
											)
										} else {
											return (
												<Link
													key={index}
													href={link.url}
													className="link white text-base capitalize text-white lg:text-lg">
													{link.name}
												</Link>
											)
										}
									})}
								</div>
							</div>
						))}
					</div>
				</div>
				<hr className="my-4" />
				<div className="flex w-full items-center justify-center text-sm">
					<p>
						&copy;{new Date().getFullYear()}. Ekunola Davies Ministry Int&apos;l. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
