import Cookies from "js-cookie"

import { createPersistMiddleware } from "@/store/middleware"
import { Maybe, UserProps } from "@/types"

interface UserStore {
	user: Maybe<UserProps>
	signIn: (user: UserProps, token: string) => void
	signOut: (options?: { redirectTo?: string; soft?: boolean }) => void
}

const initialState: UserStore = {
	user: null,
	signIn: () => {},
	signOut: () => {},
}

const useUserStore = createPersistMiddleware<UserStore>("edmi-admin", (set) => ({
	...initialState,
	signIn: (user, token) => {
		set({ user })
		Cookies.set("EDMI_AUTH_TOKEN", token, {
			sameSite: "None",
			secure: true,
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) /* 30 days */,
		})
	},
	signOut: async (options) => {
		try {
			if (options?.soft) {
				set({ user: null })
			} else {
				set({ user: null })
				Cookies.remove("EDMI_AUTH_TOKEN")
			}
		} catch (error) {
			console.error("sign out error:", error)
		} finally {
			window.localStorage.removeItem("edmi-admin")
			window.location.replace(options?.redirectTo || "/signin")
		}
	},
}))

export { useUserStore }
