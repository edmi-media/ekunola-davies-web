import { RiArrowLeftSLine, RiCloseLine, RiDeleteBin6Line } from "@remixicon/react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import { toast } from "sonner"
import Image from "next/image"
import React from "react"

import { CreateMediaMutation, GetAllSeriesQuery } from "@/queries"
import { DashboardLayout } from "@/components/layouts"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Series } from "@/components/dashboard"
import { Input } from "@/components/ui/input"
import { Seo } from "@/components/shared"
import { CreateMediaDto } from "@/dto"
import { HttpError } from "@/types"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Select,
	SelectContent,
	// SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const initialValues: CreateMediaDto = {
	content: "",
	cover: null,
	isSeries: false,
	series: "",
	slug: "",
	tags: [],
	title: "",
}

const Dashboard = () => {
	const [previewUrl, setPreviewUrl] = React.useState("")
	const [open, setOpen] = React.useState(false)
	const router = useRouter()

	const {} = useQuery({
		queryFn: () => GetAllSeriesQuery(),
		queryKey: ["get-all-series"],
		enabled: false,
	})

	const {} = useMutation({
		mutationFn: (payload: CreateMediaDto) => CreateMediaMutation(payload),
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

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			let value = e.currentTarget.value
			value = value.toLowerCase()
			if (value.trim() === "") {
				toast.error("Please enter a valid tag!")
				return
			}
			const isTagInTags = !!values.tags.find((tag) => tag.toLowerCase() === value)
			if (isTagInTags) {
				toast.error("Tag already exists!")
				return
			}
			setFieldValue("tags", [...values.tags, value])
			e.currentTarget.value = ""
		}
	}

	const removeTag = (tag: string) => {
		setFieldValue(
			"tags",
			values.tags.filter((t) => t !== tag)
		)
	}

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
				<div className="h-full w-full p-5">
					<form onSubmit={handleSubmit} className="grid h-full w-full grid-cols-2 gap-10">
						<div className="flex w-full flex-col gap-6">
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
							</div>
							<Button type="submit" size="lg">
								Add Media
							</Button>
						</div>
						<div className="flex h-full w-full flex-col gap-6 overflow-y-scroll">
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
							<Textarea
								label="Description"
								name="description"
								onChange={handleChange}
								placeholder="Enter description"
								innerClassName="h-[200px]"
							/>
							<div className="flex items-center gap-4">
								<Switch
									checked={values.isSeries}
									onCheckedChange={(checked) => setFieldValue("isSeries", checked)}
								/>
								<label htmlFor="isSeries">Is this a series?</label>
							</div>
							{values.isSeries && (
								<div className="flex w-full flex-col gap-4">
									<Select
										value={values.series}
										onValueChange={(value) => setFieldValue("series", value)}>
										<SelectTrigger>
											<SelectValue placeholder="Select a series" />
										</SelectTrigger>
										<SelectContent></SelectContent>
									</Select>
									<Dialog open={open} onOpenChange={setOpen}>
										<DialogTrigger asChild>
											<Button>Add New Series</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogTitle>Add New Series</DialogTitle>
											<DialogDescription hidden></DialogDescription>
											<Series onClose={() => setOpen(false)} />
										</DialogContent>
									</Dialog>
								</div>
							)}
							<div className="flex w-full flex-col gap-2">
								<Input label="Tags" onKeyDown={handleKeyDown} />
								<div className="flex w-full flex-1 flex-wrap items-center gap-1">
									{values.tags.map((tag) => (
										<Button
											className="capitalize"
											key={tag}
											onClick={() => removeTag(tag)}
											variant="outline">
											{tag}
											<RiCloseLine size={20} />
										</Button>
									))}
								</div>
							</div>
						</div>
					</form>
				</div>
			</DashboardLayout>
		</>
	)
}

export default Dashboard
