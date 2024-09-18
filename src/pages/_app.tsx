import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"

import { QueryQrovider, SSRPRovider } from "@/components/providers"
import { Toaster } from "@/components/ui/sonner"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			// send page view to analytics
			console.log(url)
		}
		router.events.on("routeChangeComplete", handleRouteChange)
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange)
		}
	}, [router.events])

	return (
		<QueryQrovider>
			<SSRPRovider>
				<Component {...pageProps} />
				<Toaster position="top-right" />
			</SSRPRovider>
		</QueryQrovider>
	)
}
