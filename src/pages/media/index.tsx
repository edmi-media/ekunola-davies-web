import { useQuery } from "@tanstack/react-query"
import React from "react"

import { Appbar, Footer, Pagination, Seo } from "@/components/shared"
import { GetAllMediaQuery } from "@/queries"

const LIMIT = 20

export default function Page() {
	const [page, setPage] = React.useState(1)

	const { data } = useQuery({
		queryFn: () => GetAllMediaQuery({ page, limit: LIMIT }),
		queryKey: ["media", page],
		enabled: false,
	})

	return (
		<>
			<Seo title="Media" />
			<Appbar />
			<main className="w-full bg-primary-teal/30">
				<div className="grid h-[50vh] w-full place-items-center bg-black/50 bg-auditorium-1 bg-cover bg-center bg-blend-overlay">
					<div className="flex flex-col items-center justify-between gap-6">
						<h2 className="text-5xl font-extrabold text-white lg:text-7xl">Media</h2>
					</div>
				</div>
				<section className="container mx-auto flex flex-col gap-6 px-4 py-10 lg:px-0 lg:py-20">
					<h3 className="text-2xl font-medium">Videos</h3>
					<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
						{[...Array(LIMIT)].map((_, index) => (
							<div key={index} className="aspect-[1/1.25] w-full border border-black p-4"></div>
						))}
					</div>
					<Pagination
						current={page}
						onPageChange={setPage}
						pageSize={LIMIT}
						total={Number(data?.data.total)}
					/>
				</section>
			</main>
			<Footer />
		</>
	)
}
