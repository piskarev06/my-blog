import { ADD_SEARCH } from './searchConstans'

interface AddSearch {
	type: typeof ADD_SEARCH
	search: string
}

export type SearchAction = AddSearch
