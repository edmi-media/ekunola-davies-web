/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: "image.unsplash.com",
				protocol: "https",
			},
		],
	},
}

export default nextConfig
