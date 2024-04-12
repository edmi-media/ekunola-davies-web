import Image from "next/image"
import React from "react"
import {
	RiFacebookBoxFill,
	RiInstagramFill,
	RiTiktokFill,
	RiYoutubeFill,
} from "@remixicon/react"

import styles from "./footer.module.scss"

export const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.FooterInner}>
				<div className={styles.FooterMain}>
					<div className={styles.FooterImageWrapper}>
						<div className={styles.FooterImage}>
							<Image
								src="/images/logo-light.png"
								alt="edmin logo"
								fill
								sizes="(max-width) 100%"
							/>
						</div>
					</div>
					<div className={styles.FooterNav}>
						<div className={styles.FooterNavList}></div>
					</div>
				</div>
				<hr className={styles.FooterHr} />
				<div className={styles.FooterFoot}>
					<p>&copy; {new Date().getFullYear()}. Ekunola Davies Ministry Int&apos;l</p>
					<div className={styles.FooterIconList}>
						{SocialLinks.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target="_blank"
								className={styles.FooterIconListItem}>
								<link.icon />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}

const SocialLinks = [
	{
		name: "Facebook",
		icon: RiFacebookBoxFill,
		url: "https://facebook.com/GenesisTeamIntl",
	},
	{
		name: "Instagram",
		icon: RiInstagramFill,
		url: "https://instagram.com/genesisteamintl",
	},
	{
		name: "YouTube",
		icon: RiYoutubeFill,
		url: "https://youtube.com/@ekunoladaviesministryintl",
	},
	{
		name: "TikTok",
		icon: RiTiktokFill,
		url: "https://tiktok.com/@ekunoladaviesministry",
	},
]

// const NAVIGATION = [
// 	{
// 		label: "",
// 		links: [
// 			{ name: "Home", href: "/" },
// 			{ name: "About", href: "/about" },
// 			{ name: "Programs", href: "/programs" },
// 			{ name: "Teachings", href: "/teachings" },
// 			{ name: "Media", href: "/media" },
// 			{ name: "Contact", href: "/contact" },
// 		],
// 	},
// ]
