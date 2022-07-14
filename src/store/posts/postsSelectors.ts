import { StateType } from '../../types/StoreType'

export const selectAllPosts = (state: StateType) => state.posts

export const selectVisiblePosts = (state: StateType) => {
	return state.posts.filter((el) => {
		return el.title.toLowerCase().includes(state.search.toLowerCase())
	})
}
