import { GET_ALL_POSTS } from './postsConstans'
import { PostType } from './posts.types'

export const getAllPostsAction = (posts: PostType[]) => ({
	type: GET_ALL_POSTS,
	posts,
})
