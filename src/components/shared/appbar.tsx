import Image from "next/image"
import React from "react"

export const Appbar = () => {
	return (
		<nav className="flex w-full items-center justify-between">
			<div className="relative aspect-[3.2/1] w-[80px] lg:w-[150px]">
				<Image
					src="/images/logo-dark.png"
					alt="edmi logo"
					fill
					sizes="(max-width) 100%"
					className="h-full w-full"
					priority
				/>
			</div>
		</nav>
	)
}
