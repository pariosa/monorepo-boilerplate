import { Person } from '../../backend/dummyData/dummyData'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const defaultPersonState: PersonsState ={
  persons:[]
}


export interface PersonsState {
  persons: Person[]
}


export const initialState = { persons: [] } as PersonsState

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    updatePersons(state, action: PayloadAction<Person[]>) {
     const persons = action.payload
      return {
        ...state,
        persons:[...persons]
      }
    },
    clearPersons(state) {
      return {
        ...state, 
        persons:[]
      }
    },

  },
})

export const { updatePersons, clearPersons } = personsSlice.actions
