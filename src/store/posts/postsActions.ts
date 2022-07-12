import { GET_ALL_POSTS, ADD_POST } from './postsConstans'
import { PostType } from './posts.types'

export const getAllPostsAction = (posts: PostType[]) => ({
	type: GET_ALL_POSTS,
	posts,
})

export const addPost = (post: PostType) => ({
	type: ADD_POST,
	post,
})
