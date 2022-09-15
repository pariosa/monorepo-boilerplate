import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TableState {
    order: 'asc'|'desc',
    orderBy: string,
    selected: string[],
    page: number,
    rowsPerPage:number,
}

export const initialState = {
    order: 'asc',
    orderBy: 'vendorId',
    selected:[],
    page:0,
    rowsPerPage:25,
} as TableState

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTableOrder(state, action: PayloadAction<'asc' | 'desc'>) {
      return {
        ...state,
        order:action.payload
      }
    },
    setTableOrderBy(state, action: PayloadAction<string>) {
      return {
        ...state,
        orderBy: action.payload
      }
    },
    setTableSelected(state, action: PayloadAction<string[] | []>) {
      return {
        ...state,
        selected: action.payload
      }
    },
    setTablePage(state, action: PayloadAction<number>) {
      return {
        ...state,
        page:action.payload
      }
    },
    setTableRowsPerPage(state, action: PayloadAction<number>) {
        return {
          ...state,
          rowsPerPage: action.payload
        }
      },
  },
})

export const { 
  setTableOrder, 
  setTableOrderBy,
  setTableSelected,
  setTablePage,
  setTableRowsPerPage,
 } = tableSlice.actions
