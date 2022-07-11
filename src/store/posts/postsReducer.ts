import { PostType, PostsAction } from './posts.types'
import { GET_ALL_POSTS } from './postsConstans'

export const postsReducer = (state: PostType[] = [], action: PostsAction): PostType[] => {
	switch (action.type) {
		case GET_ALL_POSTS: {
			return action.posts
		}
		default: {
			return state
		}
	}
}
