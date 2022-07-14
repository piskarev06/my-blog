import { ADD_SEARCH } from './searchConstans'

export const addSearchAction = (search: string) => ({
	type: ADD_SEARCH,
	search,
})
