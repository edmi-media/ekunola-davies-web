import Link from "next/link"
import React from "react"

import { TableCell, TableRow } from "@/components/shared/table"
import { UserProps } from "@/types"

interface Props {
	user: UserProps
}

const UserStatus = {
	active: "bg-green-100 text-green-800",
	inactive: "bg-red-100 text-red-800",
}

export const UserRow = ({ user }: Props) => {
	return (
		<TableRow>
			<TableCell className="min-w-[200px] capitalize">{user.name}</TableCell>
			<TableCell className="min-w-[150px] lowercase">{user.email}</TableCell>
			<TableCell className="w-[150px] uppercase">{user.role}</TableCell>
			<TableCell className="w-[150px]">
				<div
					className={`flex w-[80px] items-center justify-center rounded py-1 text-[10px] font-medium uppercase ${UserStatus[user.status]}`}>
					{user.status}
				</div>
			</TableCell>
			<TableCell className="w-[150px]">
				<Link href={`/dashboard/admins/${user.id}`}>View</Link>
			</TableCell>
		</TableRow>
	)
}
