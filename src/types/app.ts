export type UserProps = {
	email: string
	id: string
	image: string
	name: string
}

export type TeachingProps = {
	content: string
	id: string
	publishedBy: UserProps
	publishedOn: Date
	title: string
	updatedBy: UserProps
	updatedOn: Date
}

export type MediaProps = {
	id: string
	type: "audio" | "video"
	url: string
}
