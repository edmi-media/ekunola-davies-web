import Document, { Html, Head, Main, NextScript } from "next/document"

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

class HtmlDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<GoogleAnalytics />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

const GoogleAnalytics = () => {
	if (process.env.NODE_ENV !== "production") return null

	return (
		<>
			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${GA_TRACKING_ID}');
          `,
				}}></script>
		</>
	)
}

export default HtmlDocument
