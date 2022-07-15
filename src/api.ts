import axios from 'axios'

import { PostType } from './store/posts/posts.types'

const url = 'https://my-blogserver.herokuapp.com/posts'

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

export const deletePost = async (id: string) => {
	const res = await axios.delete(url + '/' + id)
	return res
}

export const editPost = async (post: PostType) => {
	const res = await axios.put(url + '/' + post.id, post)
	return res
}