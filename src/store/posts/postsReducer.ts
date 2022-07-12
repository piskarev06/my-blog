import { PostType, PostsAction } from './posts.types'
import { GET_ALL_POSTS, ADD_POST, DELETE_POST, EDIT_POST } from './postsConstans'

export const postsReducer = (state: PostType[] = [], action: PostsAction): PostType[] => {
	switch (action.type) {
		case GET_ALL_POSTS: {
			return action.posts
		}
		case ADD_POST: {
			return [...state, action.post]
		}
		case DELETE_POST: {
			return state.filter((el) => {
				return el.id !== action.id
			})
		}
		case EDIT_POST: {
			return state.map((el) => {
				if (el.id === action.post.id) {
					return {
						id: action.post.id,
						title: action.post.title,
						description: action.post.description,
					}
				} else return el
			})
		}
		default: {
			return state
		}
	}
}
