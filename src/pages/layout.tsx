import React from "react"

import { Appbar, Footer } from "@/components/shared"

interface Props {
	children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
	return (
		<>
			<Appbar />
			{children}
			<Footer />
		</>
	)
}
