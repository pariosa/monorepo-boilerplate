import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type Person = {
  id: number
  email: string
  phoneNumber: string
  first_name: string
  last_name: string
  avatar: string
}

export interface PersonsState {
  [index: number]: Person
}

export const initialState = [] as PersonsState

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    updatePersons(state, action: PayloadAction<Person[]>) {
      return action.payload
    },
    clearPersons(state) {
      return []
    },
  },
})

export const { updatePersons, clearPersons } = personsSlice.actions
