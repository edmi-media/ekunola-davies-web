import { UserProps } from "@/types"

enum PermissionLevel {
	Create = "Create",
	Delete = "Delete",
	Edit = "Edit",
	View = "View",
}

type PermissionProps = {
	superadmin: PermissionLevel[]
	admin: PermissionLevel[]
}

const RolePermissions: PermissionProps = {
	superadmin: [
		PermissionLevel.Create,
		PermissionLevel.Delete,
		PermissionLevel.Edit,
		PermissionLevel.View,
	],
	admin: [PermissionLevel.View],
}

interface HasPermission {
	user: UserProps
	permission: PermissionLevel
}

const hasPermission = ({ user, permission }: HasPermission) => {
	const permissions = RolePermissions[user.role]
	return permissions.includes(permission)
}

export { PermissionLevel, RolePermissions, hasPermission }
