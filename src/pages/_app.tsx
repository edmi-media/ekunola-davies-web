import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"

import { QueryQrovider, SSRPRovider } from "@/components/providers"
import "@/styles/index.scss"

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
			</SSRPRovider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryQrovider>
	)
}
