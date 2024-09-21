import { TeachingProps, HttpResponse, Pagination } from "@/types"
import { CreateArticleDto } from "@/dto"
import { axios } from "@/lib"

const CreateArticleMutation = async (payload: CreateArticleDto) => {
	return axios
		.post<HttpResponse<TeachingProps>>("/articles", payload)
		.then((res) => res.data)
}

const GetAllArticlesQuery = async (params?: { limit?: number; page?: number }) => {
	return axios
		.get<HttpResponse<Pagination<TeachingProps[]>>>("/articles", { params })
		.then((res) => res.data)
}

const GetArticleQuery = async (id: string) => {
	return axios.get<HttpResponse<TeachingProps>>(`/articles/${id}`).then((res) => res.data)
}

const UpdateArticleMutation = async (id: string, payload: Partial<CreateArticleDto>) => {
	return axios
		.put<HttpResponse<TeachingProps>>(`/articles/${id}`, payload)
		.then((res) => res.data)
}

const DeleteArticleMutation = async (id: string) => {
	return axios
		.delete<HttpResponse<TeachingProps>>(`/articles/${id}`)
		.then((res) => res.data)
}

export {
	CreateArticleMutation,
	DeleteArticleMutation,
	GetArticleQuery,
	GetAllArticlesQuery,
	UpdateArticleMutation,
}
