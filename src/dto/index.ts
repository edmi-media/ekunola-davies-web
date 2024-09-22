export interface CreateAdminDto {
	email: string
	name: string
	password: string
	role: "admin" | "superadmin"
	username: string
}

export interface CreateNewsletterDto {
	content: string
	cover: File | null
	slug: string
	subtitle: string
	title: string
}

export interface CreateArticleDto {
	content: string
	cover: File | null
	isSeries: boolean
	series: string
	slug: string
	tags: Array<string>
	title: string
}

export interface CreateSeriesDto {
	description: string
	slug: string
	title: string
}

export interface CreateMediaDto {
	content: string
	cover: File | null
	isSeries: boolean
	series: string
	slug: string
	tags: Array<string>
	title: string
}

export interface ContactFormDto {
	country: string
	email: string
	message: string
	name: string
	phone: string
	subject: string
}
