import { store } from '../store'

const state = store.getState()
export type StateType = typeof state
