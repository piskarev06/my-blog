import axios from 'axios'

import { PostType } from './store/posts/posts.types'

const url = 'https://my-blogserver.herokuapp.com/posts'

export const getAllPosts = async (limit: number = 4, page: number = 1) => {
	const res = await axios.get(url, {
		params: {
			_limit: limit,
			_page: page,
		},
	})
	return res
}

export const getPostById = async (postId: string) => {
	const res = await axios.get(url + '/' + postId)
	return res
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
