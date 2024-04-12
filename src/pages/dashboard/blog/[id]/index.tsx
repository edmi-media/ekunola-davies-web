import { useRouter } from "next/router"
import React from "react"

const Blog = () => {
	const router = useRouter()
	const { id } = router.query

	return <div>Blog {id}</div>
}

export default Blog
