import { GET_ALL_POSTS, ADD_POST, DELETE_POST } from './postsConstans'
import { PostType } from './posts.types'

export const getAllPostsAction = (posts: PostType[]) => ({
	type: GET_ALL_POSTS,
	posts,
})

export const addPostAction = (post: PostType) => ({
	type: ADD_POST,
	post,
})

export const deletePostAction = (id: string) => ({
	type: DELETE_POST,
	id,
})
