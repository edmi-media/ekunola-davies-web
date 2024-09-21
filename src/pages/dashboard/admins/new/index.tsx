import { RiArrowLeftSLine } from "@remixicon/react"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import React from "react"

import { DashboardLayout } from "@/components/layouts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Seo } from "@/components/shared"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const initialValues = {
	email: "",
	name: "",
	password: "",
	role: "",
	username: "",
}

const Dashboard = () => {
	const router = useRouter()

	const { handleChange, handleSubmit, setFieldValue, values } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<>
			<Seo title="Admins" />
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-6 p-5">
					<div className="flex w-full items-center justify-between">
						<h1 className="text-2xl">New Admin</h1>
						<Button onClick={() => router.back()} variant="outline">
							<RiArrowLeftSLine />
							Back
						</Button>
					</div>
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 lg:w-[400px]">
						<Input label="Name" name="name" onChange={handleChange} placeholder="Name" />
						<Input
							label="Username"
							name="username"
							onChange={handleChange}
							placeholder="Username"
						/>
						<Input label="Email" name="email" onChange={handleChange} placeholder="Email" />
						<Input
							label="Password"
							name="password"
							onChange={handleChange}
							placeholder="Password"
						/>
						<Select value={values.role} onValueChange={(value) => setFieldValue("role", value)}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select a role" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="admin">Admin</SelectItem>
								<SelectItem value="superadmin">Super Admin</SelectItem>
							</SelectContent>
						</Select>
						<Button type="submit">Submit</Button>
					</form>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Dashboard
