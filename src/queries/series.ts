import { HttpResponse, Pagination, SeriesProps } from "@/types"
import { CreateSeriesDto } from "@/dto"
import { axios } from "@/lib"

const CreateSeriesMutation = async (payload: CreateSeriesDto) => {
	return axios.post<HttpResponse<SeriesProps>>("/series", payload).then((res) => res.data)
}

const GetAllSeriesQuery = async (params?: { limit?: number; page?: number }) => {
	return axios
		.get<HttpResponse<Pagination<SeriesProps[]>>>("/series", { params })
		.then((res) => res.data)
}

const GetSeriesQuery = async (id: string) => {
	return axios.get<HttpResponse<SeriesProps>>(`/series/${id}`).then((res) => res.data)
}

const UpdateSeriesMutation = async (id: string, payload: Partial<CreateSeriesDto>) => {
	return axios
		.put<HttpResponse<SeriesProps>>(`/series/${id}`, payload)
		.then((res) => res.data)
}

const DeleteSeriesMutation = async (id: string) => {
	return axios.delete<HttpResponse<SeriesProps>>(`/series/${id}`).then((res) => res.data)
}

export {
	CreateSeriesMutation,
	DeleteSeriesMutation,
	GetAllSeriesQuery,
	GetSeriesQuery,
	UpdateSeriesMutation,
}
