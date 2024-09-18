export type Maybe<T> = T | null

export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}

export type ValueOf<T> = T[keyof T]

export type NonEmptyArray<T> = [T, ...T[]]

export type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never

export type HttpError = {
	__typename?: "HttpError"
	response: {
		data: {
			error: boolean
			message: string
		}
	}
}

export type HttpResponse<T> = {
	__typename?: "HttpResponse"
	data: T
	error: boolean
	message: string
}

export type Pagination<T> = {
	__typename?: "Pagination"
	data: T[]
	limit: number
	page: number
	total: number
	totalPages: number
}

export type Node = {
	id: string
	createdAt: Date | string
	deletedAt: Date | string
	updatedAt: Date | string
}

export type ContentProps = {
	html: string
	markdown: string
}

export type SeriesProps = Node & {
	__typename?: "Series"
	cover: string
	description: string
	series: Array<TeachingProps>
	slug: string
	title: string
}

export type FeedProps = Node & {
	__typename?: "Feed"
}

export type AudioProps = Node & {
	__typename?: "Audio"
	thumbnail: string
	title: string
	url: string
}

export type VideoProps = Node & {
	__typename?: "Video"
	thumbnail: string
	title: string
	url: string
}

export type TeachingProps = Node & {
	__typename?: "Teaching"
	brief: string
	content: ContentProps
	cover: string
	isSeries: boolean
	series: Maybe<SeriesProps>
	slug: string
	tags: Array<string>
	thumbnail: string
	title: string
}

export type MediaProps = Node & {
	__typename?: "Media"
	brief: string
	content: AudioProps | VideoProps
	cover: string
	isSeries: boolean
	series: Maybe<SeriesProps>
	slug: string
	tags: Array<string>
	thumbnail: string
	title: string
}

export type TestimonyProps = Node & {
	__typename?: "Testimony"
	content: ContentProps
	email: string
	location: string
	name: string
}

export type CarouselItemProps = {
	__typename?: "CarouselItem"
	description: string
	image: string
	location: string
	time: string
	title: string
}
