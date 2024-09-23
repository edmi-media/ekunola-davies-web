import React from "react"

import { cn } from "@/lib"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	index: number | string
	tabValue: number | string
}

const TabPanel = React.forwardRef<HTMLDivElement, Props>(
	({ children, className, id, index, tabValue }, ref) => {
		return (
			<div
				ref={ref}
				className="h-full w-full"
				role="tabpanel"
				hidden={tabValue !== index}
				id={id}
				aria-label={`simple-tab-${tabValue}`}>
				{tabValue === index && (
					<div className={cn("h-full w-full", className)}>{children}</div>
				)}
			</div>
		)
	}
)

TabPanel.displayName = "TabPanel"

export { TabPanel }
