import { SearchAction } from './search.types'
import { ADD_SEARCH } from './searchConstans'

export const searchReducer = (state: string = '', action: SearchAction): string => {
	switch (action.type) {
		case ADD_SEARCH: {
			return action.search
		}
		default: {
			return state
		}
	}
}
