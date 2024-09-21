import { createPersistMiddleware } from "@/store/middleware"

interface GlobalStore {
	loading: boolean
	setLoading: (loading: boolean) => void
}

const initialState: GlobalStore = {
	loading: false,
	setLoading: () => {},
}

const useGlobalStore = createPersistMiddleware<GlobalStore>("spaceet-global", (set) => ({
	...initialState,
	setLoading: (loading: boolean) => set({ loading }),
}))

export { useGlobalStore }
