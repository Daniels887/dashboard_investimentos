import { combineReducers, createStore, CombinedState } from 'redux'
import { userReducer } from './user'
import { walletReducer } from './wallet'

import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux'

const appReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer
})

export const rootReducer: typeof appReducer = (state, action) => {
  let newState = {
    ...state
  } as CombinedState<RootState> | undefined

  return appReducer(newState, action)
}

type RootState = ReturnType<typeof appReducer>

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

type ExtractedActions = typeof appReducer extends (
  state: CombinedState<RootState>,
  action: infer T
) => RootState
  ? T
  : never

type ActionTypes = ExtractedActions

type RootDispatch = <T extends ActionTypes>(action: T) => T

export const useDispatch = (): RootDispatch => useReduxDispatch()

const store = createStore(rootReducer)

export { store }
