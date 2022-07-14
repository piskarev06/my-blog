import { combineReducers } from 'redux'

import { postsReducer } from './posts/postsReducer'
import { searchReducer } from './search/searchReducer'

export const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer,
})
