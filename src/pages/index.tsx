import Image from "next/image"

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-center p-24">
			<div className="relative aspect-[3.20/1] w-full max-w-[80%]">
				<Image
					src="/images/logo-dark.png"
					alt="edmi Logo"
					fill
					sizes="(max-width) 100%"
					className="h-full w-full"
					priority
				/>
			</div>
		</main>
	)
}
