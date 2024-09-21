import { RiArrowLeftSLine, RiDeleteBin6Line } from "@remixicon/react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useFormik } from "formik"
// import { toast } from "sonner"
import Image from "next/image"
import React from "react"

import { CreateNewsletterMutation, GetAllSeriesQuery } from "@/queries"
import { DashboardLayout } from "@/components/layouts"
import { Editor, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreateNewsletterDto } from "@/dto"
import { HttpError } from "@/types"

const initialValues: CreateNewsletterDto = {
	content: "",
	cover: null,
	slug: "",
	title: "",
	subtitle: "",
}

const Dashboard = () => {
	const [previewUrl, setPreviewUrl] = React.useState("")
	const router = useRouter()

	const {} = useQuery({
		queryFn: () => GetAllSeriesQuery(),
		queryKey: ["get-all-series"],
		enabled: false,
	})

	const {} = useMutation({
		mutationFn: (payload: CreateNewsletterDto) => CreateNewsletterMutation(payload),
		mutationKey: ["create-article"],
		onSuccess: (data) => {
			console.log(data)
		},
		onError: ({ response }: HttpError) => {
			const { data } = response
			console.log(data)
		},
	})

	const { handleChange, handleSubmit, setFieldValue, values } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	React.useEffect(() => {
		if (values.cover) {
			const reader = new FileReader()
			reader.onload = () => {
				setPreviewUrl(reader.result as string)
			}
			reader.readAsDataURL(values.cover)
		} else {
			setPreviewUrl("")
		}
	}, [values.cover])

	return (
		<>
			<Seo title="Admins" />
			<DashboardLayout>
				<form onSubmit={handleSubmit} className="grid h-full w-full grid-cols-5">
					<div className="col-span-2 h-full w-full overflow-hidden p-5">
						<div className="flex h-full w-full flex-col gap-6 overflow-y-scroll">
							<Button onClick={() => router.back()} variant="outline" className="w-fit">
								<RiArrowLeftSLine />
								Back
							</Button>
							<div className="flex w-full flex-col gap-4">
								{previewUrl ? (
									<div className="relative aspect-[3/2] w-full rounded-lg border">
										<button
											type="button"
											onClick={() => setFieldValue("cover", null)}
											className="absolute left-2 top-2 !z-[5] rounded-full bg-white p-1 text-red-700">
											{" "}
											<RiDeleteBin6Line size={18} />
										</button>
										<Image
											src={previewUrl}
											alt="preview"
											fill
											sizes="(max-width:1024px)100%"
											className="rounded-lg object-cover"
										/>
									</div>
								) : (
									<label
										htmlFor="cover"
										className="grid aspect-[3/2] w-full cursor-pointer place-items-center rounded-lg border">
										<input
											type="file"
											name="cover"
											id="cover"
											onChange={(e) => setFieldValue("cover", e.target.files?.[0])}
											accept="image/*"
											className="sr-only hidden"
											multiple={false}
										/>
										<p className="w-[60%] text-center text-sm">
											Click to upload. Only jpeg, png, svg and webp allowed.
										</p>
									</label>
								)}
								<Input
									label="Title"
									name="title"
									onChange={handleChange}
									placeholder="Enter title"
								/>
								<Input
									label="Subtitle"
									name="subtitle"
									onChange={handleChange}
									placeholder="Enter subtitle"
								/>
							</div>
						</div>
					</div>
					<div className="col-span-3 h-full w-full overflow-y-scroll p-4">
						<Editor
							onValueChange={(value) => setFieldValue("content", value)}
							defaultValue={values.content}
						/>
					</div>
				</form>
			</DashboardLayout>
		</>
	)
}

export default Dashboard
