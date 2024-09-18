import { RiArrowLeftSLine } from "@remixicon/react"
// import { motion } from "framer-motion"
import { formatDate } from "date-fns"
import { toast } from "sonner"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { sermons } from "@/mock"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
	const [showButtons, setShowButtons] = React.useState({ left: false, right: false })
	const ref = React.useRef<HTMLDivElement>(null)!
	const [email, setEmail] = React.useState("")

	const handleScroll = () => {
		if (ref.current) {
			const { scrollLeft, scrollWidth, clientWidth } = ref.current
			setShowButtons((prev) => ({ ...prev, left: scrollLeft > 0 }))
			setShowButtons((prev) => ({
				...prev,
				right: scrollLeft < scrollWidth - clientWidth - 1,
			}))
		}
	}

	const scroll = (direction: "left" | "right") => {
		if (ref.current) {
			const scrollAmount = ref.current.clientWidth / 2
			ref.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			})
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!email) {
			toast.error("Please enter your email!")
			return
		}
		console.log("email: ", email)
		setEmail("")
	}

	React.useEffect(() => {
		const scrollContainer = ref.current
		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", handleScroll)
			handleScroll()
			return () => scrollContainer.removeEventListener("scroll", handleScroll)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<Seo title="Teaching • Revival • Deliverance" />
			<Appbar />
			<main className="w-full bg-primary-teal/30">
				<div className="relative h-screen w-full">
					<div className="absolute left-0 top-0 !z-[2] h-full w-full bg-black/40">
						<div className="container mx-auto flex h-full flex-col justify-end py-40">
							<div className="flex w-full flex-col items-center gap-6 text-center">
								<div className="w-full overflow-hidden lg:h-[256px]">
									<h1 className="font-light text-white lg:text-9xl">
										Teaching • Revival • Deliverance
									</h1>
								</div>
								<p className="max-w-[50%] font-medium text-neutral-300 lg:text-2xl">
									Winning souls and reviving God&apos;s people to take the great commission
									serious.
								</p>
							</div>
						</div>
					</div>
					<video
						src="/assets/videos/gtc-2020 - Trim.mp4"
						muted
						autoPlay
						loop
						className="h-screen w-full object-cover"></video>
				</div>
				<section className="container mx-auto grid grid-cols-1 gap-10 py-10 lg:grid-cols-2 lg:py-20">
					<div className="flex w-full flex-col justify-center gap-6">
						<p className="font-medium lg:text-2xl">Raising champions for Christ</p>
						<h2 className="font-light lg:text-6xl">
							A vision for our time. A message to the world. Winning souls. Bringing people to
							Christ. One soul at a time.
						</h2>
						<Link href="/about" className="link black font-medium">
							About us
						</Link>
					</div>
					<div className="relative aspect-[3/4] w-full">
						<Image
							src="/assets/images/oga.webp"
							alt="Ekunola Davies"
							fill
							sizes="(max-width:1024px)100%"
							className="object-cover"
						/>
					</div>
				</section>
				<section className="container mx-auto grid grid-cols-1 gap-10 py-10 lg:grid-cols-2 lg:py-20">
					<div className="group relative aspect-[3/2] w-full overflow-hidden">
						<Image
							src="/assets/images/crowd.webp"
							alt="crowd"
							fill
							sizes="(max-width:1024px)100%"
							className="transition-all duration-500 group-hover:scale-105 group-hover:saturate-150"
						/>
					</div>
					<div className="flex w-full flex-col justify-center gap-6">
						<p className="font-medium lg:text-2xl">Worship with us</p>
						<h2 className="font-light lg:text-6xl">
							Join us for Moment of Grace & Business breakthough every Thursdays at 8am
						</h2>
						<div className="flex items-center gap-6">
							<Dialog>
								<DialogTrigger asChild>
									<Button size="lg" variant="secondary" className="w-fit">
										Add to Calendar
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogTitle>Add to Calendar</DialogTitle>
									<DialogDescription hidden></DialogDescription>
									<div className="min-h-[400px] w-full"></div>
								</DialogContent>
							</Dialog>
							<Link href="/programs" className="link black font-medium">
								See other programs
							</Link>
						</div>
					</div>
				</section>
				<section className="flex w-full flex-col items-center gap-10 py-10 text-center lg:py-20">
					<div className="flex flex-col items-center gap-3">
						<p className="font-medium lg:text-2xl">Meditate on the Word</p>
						<h2 className="w-full font-light lg:max-w-[60%] lg:text-6xl">
							Read excerpts from the ministrations of the man of God
						</h2>
					</div>
					<div className="container relative mx-auto w-full">
						<div
							ref={ref}
							className="relative flex w-auto items-center space-x-5 overflow-x-scroll">
							{sermons.map((sermon, index) => (
								<div
									key={index}
									className="flex w-[300px] flex-shrink-0 flex-col rounded-md bg-white">
									<div className="relative aspect-[1/1.075] w-full rounded-t-md">
										<Image
											src="/assets/images/oga.webp"
											alt="Ekunola Davies"
											fill
											sizes="(max-width:1024px)100%"
											className="rounded-t-md object-cover"
										/>
									</div>
									<div className="flex w-full flex-col items-start gap-3 p-4">
										<h4 className="font-medium lg:text-xl">{sermon.title}</h4>
										<p className="text-xs text-neutral-500 lg:text-sm">
											{formatDate(sermon.publishedAt, "PPPP")}
										</p>
										<Link href="/" className="link black lg;text-sm text-xs font-medium">
											Read more
										</Link>
									</div>
								</div>
							))}
						</div>
						{showButtons.left && (
							<button
								onClick={() => scroll("left")}
								className="absolute left-5 top-1/2 !z-[2] grid size-8 -translate-y-1/2 place-items-center rounded-full bg-black text-white">
								<RiArrowLeftSLine size={24} />
							</button>
						)}
						{showButtons.right && (
							<button
								onClick={() => scroll("right")}
								className="absolute right-5 top-1/2 !z-[2] grid size-8 -translate-y-1/2 rotate-180 place-items-center rounded-full bg-black text-white">
								<RiArrowLeftSLine size={24} />
							</button>
						)}
					</div>
				</section>
				<section className="h-[700px] w-full bg-black/45 bg-hero bg-cover bg-center py-10 bg-blend-saturation lg:py-20">
					<div className="container mx-auto flex h-full flex-col justify-center gap-10 text-white">
						<div>
							<p className="font-semibold lg:text-2xl">Prophetic Evangelist</p>
							<h2 className="font-light lg:text-8xl">Ekunola Davies</h2>
						</div>
						<Link href="/ekunola-davies" className="link white font-medium">
							Learn more
						</Link>
					</div>
				</section>
				<section className="w-full bg-white py-10 lg:py-20">
					<div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
						<div className="flex w-full flex-col justify-center gap-3">
							<p className="font-medium lg:text-2xl">Reach out to us</p>
							<h2 className="w-full font-light lg:text-6xl">
								Do you have a prayer request, need conuselling or want to share a testimony?
							</h2>
							<Link href="/contact" className="link black font-medium">
								Reach out
							</Link>
						</div>
						<div className="aspect-[3/2] w-full border border-black"></div>
					</div>
				</section>
				<section className="flex w-full flex-col items-center gap-10 py-10 text-center lg:py-20">
					<div className="flex flex-col items-center gap-3">
						<p className="font-medium lg:text-2xl">Subscribe to our newsletter</p>
						<h2 className="w-full font-light lg:max-w-[60%] lg:text-6xl">
							Get the monthly scriptural reading, prayer points and more.
						</h2>
					</div>
					<form onSubmit={handleSubmit} className="flex items-center gap-6">
						<Input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							wrapperClassName="w-[300px]"
							innerClassName="border-black"
							className="text-black placeholder:text-neutral-700"
						/>
						<Button size="lg" type="submit" variant="secondary">
							Subscribe
						</Button>
					</form>
				</section>
			</main>
			<Footer />
		</>
	)
}
