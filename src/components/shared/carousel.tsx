import Image from "next/image"
import React from "react"

import { CarouselItemProps } from "@/types"

interface Props {
	items: CarouselItemProps[]
}

const ITEM_HEIGHT = 100
const VISIBLE_ITEMS = 5

export const Carousel = ({ items }: Props) => {
	const [currentIndex, setCurrentIndex] = React.useState(0)
	const listRef = React.useRef<HTMLUListElement>(null)

	const carouselItems = React.useMemo(
		() => [...items.slice(-2), ...items, ...items.slice(0, 2)],
		[items]
	)

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [items.length])

	React.useEffect(() => {
		const ref = listRef.current
		if (ref) {
			const newScrollPosition =
				(currentIndex + 2) * ITEM_HEIGHT - (VISIBLE_ITEMS / 2) * ITEM_HEIGHT
			ref.scrollTop = newScrollPosition
		}
	}, [currentIndex])

	const handleScroll = React.useCallback(() => {
		const ref = listRef.current
		if (ref) {
			const { scrollTop, scrollHeight } = ref
			if (scrollTop < ITEM_HEIGHT) {
				ref.scrollTop = scrollTop + items.length * ITEM_HEIGHT
			} else if (scrollTop > scrollHeight - (VISIBLE_ITEMS + 1) * ITEM_HEIGHT) {
				ref.scrollTop = scrollTop - items.length * ITEM_HEIGHT
			}
		}
	}, [items.length])

	const throttledHandleScroll = React.useCallback(() => {
		return throttle(handleScroll, 100)
	}, [handleScroll])

	return (
		<div className="flex w-full items-center justify-center gap-10">
			<div className="aspect-square w-[500px]">
				<div className="relative h-full w-full">
					<Image
						src={items[currentIndex].image}
						alt={items[currentIndex].title}
						fill
						sizes="(max-width: 1024px) 100%"
						className="object-cover"
					/>
				</div>
			</div>
			<div className="relative aspect-video h-[500px] overflow-hidden">
				<ul
					ref={listRef}
					className="scrollbar-hide absolute inset-0 h-full w-full overflow-y-auto"
					style={{
						height: `${ITEM_HEIGHT * VISIBLE_ITEMS}px`,
						scrollBehavior: "smooth",
					}}
					onScroll={throttledHandleScroll()}>
					{carouselItems.map((item, index) => (
						<CarouselItem
							key={index}
							item={item}
							isActive={
								index - 2 === currentIndex ||
								(index === carouselItems.length - 2 && currentIndex === 0) ||
								(index === 1 && currentIndex === items.length - 1)
							}
							itemHeight={ITEM_HEIGHT}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}
interface CarouselProps {
	item: CarouselItemProps
	isActive: boolean
	itemHeight: number
}

const CarouselItem = ({ item, isActive, itemHeight }: CarouselProps) => {
	return (
		<li
			className={`h-[${itemHeight}px] flex items-center p-4 transition-colors duration-300 ${
				isActive ? "text-black" : "text-gray-400"
			}`}>
			<div>
				<h3 className="text-2xl font-semibold">{item.title}</h3>
			</div>
		</li>
	)
}

// Throttle function to limit the rate of function calls
function throttle(func: (...args: any[]) => void, limit: number) {
	let inThrottle: boolean
	return (...args: any[]) => {
		if (!inThrottle) {
			func(...args)
			inThrottle = true
			setTimeout(() => (inThrottle = false), limit)
		}
	}
}

export default Carousel
