import React, { createContext, useContext, useLayoutEffect, useState } from "react"
import type { PropsWithChildren } from "react"

import { StyleProvider } from "./style-creator"

const canUseDOM = Boolean(
	typeof window !== "undefined" && window?.document && window?.document.createElement
)

interface SSRContextProps {
	isClient: boolean
	isServer: boolean
}

const defaultSSRCOntextProps: SSRContextProps = {
	isClient: canUseDOM,
	isServer: !canUseDOM,
}

const SSRContext = createContext<SSRContextProps>(defaultSSRCOntextProps)

export const SSRPRovider: React.FC<PropsWithChildren & {}> = (props) => {
	const { children } = props

	// Copy the default context so that tht strict equality checks against the context value are false
	const ctx = { ...defaultSSRCOntextProps }

	return (
		<SSRContext.Provider value={ctx}>
			<StyleProvider>{children}</StyleProvider>
		</SSRContext.Provider>
	)
}

export function useSSR() {
	const ctx = useContext(SSRContext)
	const isInSSRContext = ctx !== defaultSSRCOntextProps
	const [isHydrating, seIsHydrating] = useState(canUseDOM && isInSSRContext)
	if (canUseDOM) {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useLayoutEffect(() => seIsHydrating(false), [])
	}

	return { ...ctx, isHydrating }
}
