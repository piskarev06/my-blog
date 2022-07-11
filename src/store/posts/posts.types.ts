import { GET_ALL_POSTS } from './postsConstans'

export interface PostType {
	id: string
	title: string
	description: string
}

interface GetAllPosts {
	type: typeof GET_ALL_POSTS
	posts: PostType[]
}

export type PostsAction = GetAllPosts
