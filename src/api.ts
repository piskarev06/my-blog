import axios from 'axios'

import { PostType } from './store/posts/posts.types'

const url = 'http://localhost:3004/posts'

export const getAllPosts = async () => {
	const res = await fetch(url)
	return await res.json()
}

export const getPostById = async (postId: string) => {
	const res = await fetch(url + '/' + postId)
	return await res.json()
}

export const createNewPost = async (post: PostType) => {
	const res = await axios.post(url, post)
	return res
}
