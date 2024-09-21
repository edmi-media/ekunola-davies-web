import { HttpResponse, UserProps } from "@/types"
import { CreateAdminDto } from "@/dto"
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
		.post<HttpResponse<UserProps>>("/auth/signup", payload)
		.then((res) => res.data)
}

const SignInMutation = async (payload: SignInDto) => {
	return axios
		.post<HttpResponse<SignInResponse>>("/auth/signin", payload)
		.then((res) => res.data)
}

const UpdateAdminMutation = async (id: string, payload: Partial<CreateAdminDto>) => {
	return axios
		.put<HttpResponse<UserProps>>(`/auth/update${id}`, payload)
		.then((res) => res.data)
}

export { CreateAdminMutation, SignInMutation, UpdateAdminMutation }
