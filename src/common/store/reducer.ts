import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { loadingReducer as loading } from './loading/reducer'

export const createRootReducer = (history: History) =>
  combineReducers({
    loading,
    router: connectRouter(history),
  })

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>