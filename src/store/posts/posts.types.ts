import { GET_ALL_POSTS, ADD_POST } from './postsConstans'

export interface PostType {
	id: string
	title: string
	description: string
}

interface GetAllPosts {
	type: typeof GET_ALL_POSTS
	posts: PostType[]
}

interface AddPost {
	type: typeof ADD_POST
	post: PostType
}

export type PostsAction = GetAllPosts | AddPost
