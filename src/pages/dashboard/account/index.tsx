import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import React from "react"

import { DashboardLayout } from "@/components/layouts"
import { Button } from "@/components/ui/button"
import { UpdateAdminMutation } from "@/queries"
import { useUserStore } from "@/store/z-stores"
import { Input } from "@/components/ui/input"
import { Seo } from "@/components/shared"
import { CreateAdminDto } from "@/dto"
import { HttpError } from "@/types"

const Dashboard = () => {
	const [isEditing, setIsEditing] = React.useState(false)
	const { user } = useUserStore()

	const initialValues: Partial<CreateAdminDto> = {
		email: String(user?.email),
		name: String(user?.name),
		password: "",
		role: "admin",
		username: String(user?.username),
	}

	const {} = useMutation({
		mutationFn: (payload: Partial<CreateAdminDto>) =>
			UpdateAdminMutation(String(user?.id), payload),
		mutationKey: ["update-admin"],
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
		<>
			<Seo title="Account" />
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-6 p-5">
					<Button
						className="w-[80px]"
						onClick={() => setIsEditing((prev) => !prev)}
						variant="outline">
						{isEditing ? "Cancel" : "Edit"}
					</Button>
					<form onSubmit={handleSubmit} className="flex max-w-[40%] flex-col gap-4">
						<Input
							disabled={!isEditing}
							name="name"
							onChange={handleChange}
							placeholder="Name"
						/>
						<Input
							disabled={!isEditing}
							name="username"
							onChange={handleChange}
							placeholder="Username"
						/>
						<Input
							disabled={!isEditing}
							name="email"
							onChange={handleChange}
							placeholder="Email"
						/>
						<Input
							disabled={!isEditing}
							name="password"
							onChange={handleChange}
							placeholder="Password"
						/>
						<Button type="submit">Submit</Button>
					</form>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Dashboard
