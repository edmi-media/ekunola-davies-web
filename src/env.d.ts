const requiredEnvs = [
	"NEXT_PUBLIC_TESTING",
	"NEXT_PUBLIC_API_URL",
	"NEXT_PUBLIC_GA_ID",
	"NEXT_PUBLIC_APP_URL",
] as const

type RequiredEnvs = (typeof requiredEnvs)[number]

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Record<RequiredEnvs, string> {
			readonly NEXT_PUBLIC_TESTING: string
			readonly NEXT_PUBLIC_API_URL: string
			readonly NEXT_PUBLIC_GA_ID: string
			readonly NEXT_PUBLIC_APP_URL: string
		}
	}
}
