import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import React from "react"

import { Textarea } from "@/components/ui/textarea"
import { CreateSeriesMutation } from "@/queries"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreateSeriesDto } from "@/dto"
import { HttpError } from "@/types"

interface Props {
	onClose: () => void
}

const initialValues: CreateSeriesDto = {
	description: "",
	slug: "",
	title: "",
}

export const Series = ({}: Props) => {
	const {} = useMutation({
		mutationFn: (payload: CreateSeriesDto) => CreateSeriesMutation(payload),
		mutationKey: ["create-series"],
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
		<div className="flex w-full flex-col gap-6">
			<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
				<Input label="Title" name="title" onChange={handleChange} placeholder="Enter title" />
				<Textarea
					label="Description"
					name="description"
					onChange={handleChange}
					placeholder="Enter title"
				/>
				<Button type="submit">Add Series</Button>
			</form>
		</div>
	)
}
