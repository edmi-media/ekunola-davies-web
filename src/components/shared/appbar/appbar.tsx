import Image from "next/image"
import React from "react"

import styles from "./appbar.module.scss"

export const Appbar = () => {
	return (
		<nav className={styles.Appbar}>
			<div className={styles.AppbarLogo}>
				<Image
					src="/images/logo-dark.png"
					alt="edmi logo"
					fill
					sizes="(max-width) 100%"
					className="h-full w-full"
					priority
				/>
			</div>
			<div className={styles.AppbarList}></div>
		</nav>
	)
}
