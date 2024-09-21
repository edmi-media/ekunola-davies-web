import { HttpResponse, MediaProps, Pagination } from "@/types"
import { CreateMediaDto } from "@/dto"
import { axios } from "@/lib"

const CreateMediaMutation = async (payload: CreateMediaDto) => {
	return axios.post<HttpResponse<MediaProps>>("/media", payload).then((res) => res.data)
}

const GetAllMediaQuery = async (params?: { limit?: number; page?: number }) => {
	return axios
		.get<HttpResponse<Pagination<MediaProps[]>>>("/media", { params })
		.then((res) => res.data)
}

const GetMediaQuery = async (id: string) => {
	return axios.get<HttpResponse<MediaProps>>(`/media/${id}`).then((res) => res.data)
}

const UpdateMediaMutation = async (id: string, payload: Partial<CreateMediaDto>) => {
	return axios
		.put<HttpResponse<MediaProps>>(`/media/${id}`, payload)
		.then((res) => res.data)
}

const DeleteMediaMutation = async (id: string) => {
	return axios.delete<HttpResponse<MediaProps>>(`/media/${id}`).then((res) => res.data)
}

export {
	CreateMediaMutation,
	DeleteMediaMutation,
	GetMediaQuery,
	GetAllMediaQuery,
	UpdateMediaMutation,
}
