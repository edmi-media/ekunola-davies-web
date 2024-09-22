import { RiMailLine, RiMapPin2Line, RiMessage3Line, RiPhoneLine } from "@remixicon/react"

export const contact = [
	{
		label: "Send an email",
		content: "Mails are typically replied in 48 hours",
		icon: RiMailLine,
		links: [{ url: "mailto: ekunoladavies@yahoo.com", text: "ekunoladavies@yahoo.com" }],
	},
	{
		label: "Call us",
		content: "Mon-Fri from 9am to 4pm",
		icon: RiPhoneLine,
		links: [{ url: "tel:+2348055555784", text: "+2348055555784" }],
	},
	{
		label: "Visit us",
		content: "The prayer mountain is always open.",
		icon: RiMapPin2Line,
		links: [
			{ url: "https://maps.app.goo.gl/PXycW2jfh9RZYfT57", text: "Rehoboth Prayer Mountain" },
		],
	},
	{
		label: "Send a message",
		content: "Mon-Fri from 9am-4pm",
		icon: RiMessage3Line,
		links: [{ url: "https://wa.me/+2348055555784", text: "Send a message" }],
	},
]
