import Image from "next/image"

import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./style.module.scss"

export default function Home() {
	return (
		<>
			<Seo title="Home" />
			<Appbar />
			<main className={styles.Main}></main>
			<Footer />
		</>
	)
}
