const url = 'http://localhost:3004/posts'

export const getAllPosts = async () => {
	const res = await fetch(url)
	return await res.json()
}

export const getPostById = async (postId: string) => {
	const res = await fetch(url + '/' + postId)
	return await res.json()
}
