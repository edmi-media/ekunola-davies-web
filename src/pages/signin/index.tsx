import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import Image from "next/image"
import { toast } from "sonner"
import Link from "next/link"
import React from "react"

import { SignInDto, SignInMutation } from "@/queries"
import { Button } from "@/components/ui/button"
import { useUserStore } from "@/store/z-stores"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/shared"
import { LogoDark } from "@/assets/images"
import { HttpError } from "@/types"

const initialValues: SignInDto = {
	email: "",
	password: "",
}

const Signin = () => {
	const { signIn } = useUserStore()
	const router = useRouter()

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: SignInDto) => SignInMutation(payload),
		mutationKey: ["signin"],
		onSuccess: (data) => {
			const {
				data: { token, user },
				message,
			} = data
			toast.success(message)
			signIn(user, token)
			router.push("/dashboard")
		},
		onError: ({ response }: HttpError) => {
			const { data } = response
			toast.error(data.message)
		},
	})

	const { handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (values) => {
			mutateAsync(values)
		},
	})

	return (
		<main className="grid h-screen w-screen place-items-center bg-white">
			<div className="flex flex-col items-center gap-6">
				<Image src={LogoDark} alt="logo" width={300} height={116} />
				<form onSubmit={handleSubmit} className="flex w-[400px] flex-col gap-4">
					<Input label="Email" name="email" onChange={handleChange} />
					<Input type="password" label="Password" name="password" onChange={handleChange} />
					<Button type="submit">{isPending ? <Spinner /> : "Sign In"}</Button>
				</form>
				<Link href="/" className="link black font-medium">
					Go to homepage
				</Link>
			</div>
		</main>
	)
}

export default Signin
