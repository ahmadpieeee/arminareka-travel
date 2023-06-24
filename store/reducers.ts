import { combineReducers, AnyAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import storage from '@/store/storage'

// reducers
import { aboutApi } from './slices/about-us'
import { authApi } from './slices/auth'

const combineReducer = combineReducers({
  [aboutApi.reducerPath]: aboutApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})

export const rootReducer = (
  state: ReturnType<typeof combineReducer>,
  action: AnyAction,
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return combineReducer(state, action)
  }
}

export const apiList = [aboutApi.middleware, authApi.middleware]

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
}
