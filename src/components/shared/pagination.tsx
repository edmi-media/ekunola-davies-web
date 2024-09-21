import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import React from "react"

interface Props {
	current: number
	onPageChange: (page: number) => void
	pageSize: number
	total: number
}

export const Pagination = (props: Props) => {
	const { current, onPageChange, pageSize, total } = props

	const totalPages = Math.ceil(total / pageSize)

	const goToPrevious = () => {
		if (current > 1) {
			return onPageChange(current - 1)
		}
	}
	const goToNext = () => {
		if (current < totalPages) {
			onPageChange(current + 1)
		}
	}

	const renderPageButton = (index: number) => (
		<button
			key={index}
			onClick={() => onPageChange(index)}
			className={`grid size-8 place-items-center rounded-md text-sm font-medium ${current === index ? "bg-brand-primary-light" : "bg-brand-light-200"}`}>
			{index}
		</button>
	)

	const renderButtons = () => {
		const numbers = []
		const showEllipsis = totalPages > 10

		if (showEllipsis) {
			numbers.push(renderPageButton(1))

			if (current > 4) {
				numbers.push(
					<span key="ellipsis-start" className="px-2">
						...
					</span>
				)
			}

			const start = Math.max(2, current - 2)
			const end = Math.min(totalPages - 1, current + 2)

			for (let i = start; i <= end; i++) {
				numbers.push(renderPageButton(i))
			}

			if (current < totalPages - 3) {
				numbers.push(
					<span key="ellipsis-end" className="px-2">
						...
					</span>
				)
			}

			numbers.push(renderPageButton(totalPages))
		} else {
			for (let i = 1; i <= totalPages; i++) {
				numbers.push(renderPageButton(i))
			}
		}
		return numbers
	}

	return (
		<div className="flex w-full items-center justify-center gap-2">
			<button
				className="bg-brand-light-200 grid size-8 place-items-center rounded-md disabled:cursor-not-allowed disabled:text-gray-500"
				disabled={current === 1}
				onClick={goToPrevious}>
				<RiArrowLeftSLine />
			</button>
			{renderButtons()}
			<button
				className="bg-brand-light-200 grid size-8 place-items-center rounded-md disabled:cursor-not-allowed disabled:text-gray-500"
				disabled={current === totalPages}
				onClick={goToNext}>
				<RiArrowRightSLine />
			</button>
		</div>
	)
}
