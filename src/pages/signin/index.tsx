import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { SignInDto, SignInMutation } from "@/queries"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LogoDark } from "@/assets/images"
import { HttpError } from "@/types"

const initialValues: SignInDto = {
	email: "",
	password: "",
}

const Signin = () => {
	const {} = useMutation({
		mutationFn: (payload: SignInDto) => SignInMutation(payload),
		mutationKey: ["signin"],
		onSuccess: (data) => {
			console.log(data)
		},
		onError: ({ response }: HttpError) => {
			const { data } = response
			console.log(data)
		},
	})

	const { handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<main className="grid h-screen w-screen place-items-center bg-white">
			<div className="flex flex-col items-center gap-6">
				<Image src={LogoDark} alt="logo" width={300} height={116} />
				<form onSubmit={handleSubmit} className="flex w-[400px] flex-col gap-4">
					<Input label="Email" name="email" onChange={handleChange} />
					<Input label="Password" name="password" onChange={handleChange} />
					<Button type="submit">Sign In</Button>
				</form>
				<Link href="/" className="link black font-medium">
					Go to homepage
				</Link>
			</div>
		</main>
	)
}

export default Signin
