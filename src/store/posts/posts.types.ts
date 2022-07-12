import { GET_ALL_POSTS, ADD_POST, DELETE_POST } from './postsConstans'

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

interface DeletePost {
	type: typeof DELETE_POST
	id: string
}

export type PostsAction = GetAllPosts | AddPost | DeletePost
