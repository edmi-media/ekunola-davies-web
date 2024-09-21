import { HttpResponse, NewsletterProps, Pagination } from "@/types"
import { CreateNewsletterDto } from "@/dto"
import { axios } from "@/lib"

const CreateNewsletterMutation = async (payload: CreateNewsletterDto) => {
	return axios
		.post<HttpResponse<NewsletterProps>>("/newsletters", payload)
		.then((res) => res.data)
}

const GetAllNewslettersQuery = async (params?: { limit?: number; page?: number }) => {
	return axios
		.get<HttpResponse<Pagination<NewsletterProps[]>>>("/newsletters", { params })
		.then((res) => res.data)
}

const GetNewsletterQuery = async (id: string) => {
	return axios
		.get<HttpResponse<NewsletterProps>>(`/newsletters/${id}`)
		.then((res) => res.data)
}

const UpdateNewsletterMutation = async (
	id: string,
	payload: Partial<CreateNewsletterDto>
) => {
	return axios
		.put<HttpResponse<NewsletterProps>>(`/newsletters/${id}`, payload)
		.then((res) => res.data)
}

const DeleteNewsletterMutation = async (id: string) => {
	return axios
		.delete<HttpResponse<NewsletterProps>>(`/newsletters/${id}`)
		.then((res) => res.data)
}

export {
	CreateNewsletterMutation,
	DeleteNewsletterMutation,
	GetNewsletterQuery,
	GetAllNewslettersQuery,
	UpdateNewsletterMutation,
}
