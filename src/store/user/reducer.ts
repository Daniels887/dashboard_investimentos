import { UserState } from './types'

const initialState = {
  name: 'Andreia',
  cc: 'CC 16289-9',
  sale: '5.620.080,85',
  available: '10.000.000,00',
  patrimony: '10.000.000,00'
}

const userReducer = (state: UserState = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer
