import { HttpResponse, UserProps } from "@/types"
import { CreateAdminDto } from "@/dto"
import { endpoints } from "@/config"
import { axios } from "@/lib"

export interface SignInDto {
	email: string
	password: string
}

export interface SignInResponse {
	user: UserProps
	token: string
}

const CreateAdminMutation = async (payload: CreateAdminDto) => {
	return axios
		.post<HttpResponse<UserProps>>(endpoints().users.signup, payload)
		.then((res) => res.data)
}

const SignInMutation = async (payload: SignInDto) => {
	return axios
		.post<HttpResponse<SignInResponse>>(endpoints().users.signin, payload)
		.then((res) => res.data)
}

const GetAllAdminsQuery = async () => {
	return axios.get<HttpResponse<UserProps[]>>(endpoints().users.get_all).then((res) => res.data)
}

const GetAdminQuery = async (id: string) => {
	return axios.get<HttpResponse<UserProps>>(endpoints(id).users.get_one).then((res) => res.data)
}

const UpdateAdminMutation = async (id: string, payload: Partial<CreateAdminDto>) => {
	return axios
		.put<HttpResponse<UserProps>>(endpoints(id).users.update, payload)
		.then((res) => res.data)
}

export {
	CreateAdminMutation,
	GetAdminQuery,
	GetAllAdminsQuery,
	SignInMutation,
	UpdateAdminMutation,
}
