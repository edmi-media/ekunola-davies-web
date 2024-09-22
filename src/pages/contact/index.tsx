import { useFormik } from "formik"
import React from "react"

import { Appbar, Footer, PhoneInput, Seo } from "@/components/shared"
import { Textarea } from "@/components/ui/textarea"
import { contact, countries, faqs } from "@/config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ContactFormDto } from "@/dto"
import { sanitizeHtml } from "@/lib"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/shared/accordion"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const initialValues: ContactFormDto = {
	country: "Nigeria",
	email: "",
	message: "",
	name: "",
	phone: "",
	subject: "",
}

export default function Page() {
	const { handleChange, handleSubmit, setFieldValue, values } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<>
			<Seo title="Contact Us" />
			<Appbar />
			<main className="w-full bg-primary-teal/30">
				<div className="grid h-[50vh] w-full place-items-center bg-black/50 bg-auditorium-1 bg-cover bg-center bg-blend-overlay">
					<div className="flex flex-col items-center justify-between gap-6">
						<h2 className="text-7xl font-extrabold text-white">Contact Us</h2>
					</div>
				</div>
				<section className="container mx-auto flex flex-col items-center gap-6 px-4 py-10 lg:px-0 lg:py-20">
					<div className="flex flex-col items-center text-center">
						<h3 className="font-semibold lg:text-3xl">Get in touch</h3>
						<p className="font-medium lg:text-lg">We&apos;d love to hear from you.</p>
					</div>
					<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
						{contact.map(({ content, icon: Icon, label, links }, index) => (
							<div
								key={index}
								className="flex w-full flex-col gap-4 rounded-2xl border border-black p-4">
								<div className="grid size-10 place-items-center rounded-md bg-neutral-900 text-white">
									<Icon />
								</div>
								<h5 className="font-semibold lg:text-xl">{label}</h5>
								<p className="font-medium">{content}</p>
								<div className="flex flex-col gap-2">
									{links.map(({ text, url }, index) => (
										<a
											key={index}
											href={url}
											target="_blank"
											className="text-sm font-medium underline">
											{text}
										</a>
									))}
								</div>
							</div>
						))}
					</div>
				</section>
				<section className="mx-auto flex w-full place-items-center bg-white px-4 py-10 lg:px-0 lg:py-20">
					<div className="container mx-auto flex flex-col items-center gap-6">
						<div className="flex flex-col items-center text-center">
							<h3 className="font-semibold lg:text-3xl">Reach out to us</h3>
							<p className="font-medium lg:text-lg">
								Let us know how we can help. Someone would typically respond within 48 hours
							</p>
						</div>
						<form
							onSubmit={handleSubmit}
							className="flex w-full flex-col items-center gap-4 lg:w-[60%]">
							<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
								<Input
									label="Name"
									name="name"
									onChange={handleChange}
									placeholder="Enter your name"
								/>
								<Input
									label="Email"
									name="email"
									onChange={handleChange}
									placeholder="Enter your email"
								/>
							</div>
							<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
								<PhoneInput
									label="Phone Number"
									onPhoneNumberChange={(value) => setFieldValue("phone", value)}
								/>
								<div className="flex flex-col gap-1">
									<label htmlFor="country">Country</label>
									<Select
										value={values.country}
										onValueChange={(value) => setFieldValue("country", value)}>
										<SelectTrigger>
											<SelectValue placeholder="Select a country" />
										</SelectTrigger>
										<SelectContent>
											{countries.map((country) => (
												<SelectItem key={country.code} value={country.name}>
													{country.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							</div>
							<Input
								label="Subject"
								name="subject"
								onChange={handleChange}
								placeholder="Enter subject"
							/>
							<Textarea
								label="Message"
								name="message"
								onChange={handleChange}
								placeholder="Enter your message"
								innerClassName="h-[200px]"
							/>
							<Button type="submit" className="w-[200px]">
								Submit
							</Button>
						</form>
					</div>
				</section>
				<section className="container mx-auto flex flex-col items-center px-4 py-10 lg:px-0 lg:py-20">
					<Accordion type="single" collapsible className="w-full lg:w-[700px]">
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={faq.question}>
								<AccordionTrigger>{faq.question}</AccordionTrigger>
								<AccordionContent>
									<div
										className="html-content"
										dangerouslySetInnerHTML={sanitizeHtml(faq.answer)}></div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</section>
				<section className="h-[600px] w-full">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.115746493876!2d3.078617075779655!3d6.876733493122073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b097b6a09787b%3A0x8b08a8c3d4fbef97!2sRehoboth%20Prayer%20Mountain!5e0!3m2!1sen!2sng!4v1726994926361!5m2!1sen!2sng"
						allowFullScreen
						loading="lazy"
						className="size-full border-none outline-none"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</section>
			</main>
			<Footer />
		</>
	)
}
