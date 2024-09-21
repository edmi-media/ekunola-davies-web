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

export type UserProps = Node & {
	__typename?: "User"
	email: string
	name: string
	role: "superadmin" | "admin"
	username: string
	status: "active" | "inactive"
}

export type SeriesProps = Node & {
	__typename?: "Series"
	description: string
	slug: string
	title: string
}

export type FeedProps = Node & {
	__typename?: "Feed"
}

export type TeachingProps = Node & {
	__typename?: "Teaching"
	comments: number
	content: string
	cover: string
	isSeries: boolean
	likes: number
	series: Maybe<SeriesProps>
	slug: string
	status: "published" | "draft" | "archived"
	tags: Array<string>
	title: string
	views: number
}

export type NewsletterProps = Node & {
	__typename?: "Newsletter"
	content: string
	cover: string
	slug: string
	status: "published" | "draft" | "archived"
	subtitle: string
	title: string
}

export type MediaProps = Node & {
	__typename?: "Media"
	content: string
	cover: string
	isSeries: boolean
	series: Maybe<SeriesProps>
	slug: string
	tags: Array<string>
	status: "published" | "draft" | "archived"
	title: string
}

export type TestimonyProps = Node & {
	__typename?: "Testimony"
	content: string
	email: string
	location: string
	name: string
}
