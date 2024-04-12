import Image from "next/image"

import { Container, Flex, Heading, Seo, Text } from "@/components/shared"
import { DefaultLayout } from "./layout"

import styles from "./style.module.scss"

export default function Home() {
	return (
		<>
			<Seo title="Teaching • Revival • Deliverance" />
			<DefaultLayout>
				<main className={styles.Main}>
					<div className={styles.MainHero}>
						<Heading.h1 className={styles.MainHeroHeading} weight={800}>
							Welcome to Ekunola Davies Ministry
						</Heading.h1>
					</div>
					<Flex className={styles.MainSectionWrapper}>
						<Flex.Column className={styles.MainSection}>
							<Heading.h2 casing="capitalize">ekunola davies ministry int&apos;l</Heading.h2>
							<Text fontSize="24px" align="center">
								Ekunola Davies Ministry Int&apos;l, also known as Genesis Team Int&apos;l is an
								evangelistic ministry born into Celestial Church of Christ through the call of God
								upon His anointed vessel, Evangelist Ekunola Davies in the year 2001. Over the
								years, God has recruited many co- laborers by himself and through the field
								exploits of the man of God. Together, we are saddled with the vision of raising
								champions that will reign with Jesus Christ on earth and in heaven.
							</Text>
						</Flex.Column>
					</Flex>
				</main>
			</DefaultLayout>
		</>
	)
}
