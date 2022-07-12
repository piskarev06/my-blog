import { PostType, PostsAction } from './posts.types'
import { GET_ALL_POSTS, ADD_POST } from './postsConstans'

export const postsReducer = (state: PostType[] = [], action: PostsAction): PostType[] => {
	switch (action.type) {
		case GET_ALL_POSTS: {
			return action.posts
		}
		case ADD_POST: {
			return [...state, action.post]
		}
		default: {
			return state
		}
	}
}
