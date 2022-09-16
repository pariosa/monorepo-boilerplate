import { combineReducers } from 'redux'
import {
  initialState as initialPersonState,
  Person,
  personsSlice,
} from './personReducer'
import {
  initialState as initialTableState,
  tableSlice,
  TableState,
} from './tableReducer'
import {
  initialState as initialPartnerState,
  TradePartner,
  tradePartnersSlice,
} from './tradePartnerReducer'

export type State = {
  persons: Array<Person>
  table: TableState
  partners: Array<TradePartner>
}

export const initialState = {
  persons: initialPersonState,
  table: initialTableState,
  partners: initialPartnerState,
}

export const rootReducer = combineReducers({
  persons: personsSlice.reducer,
  table: tableSlice.reducer,
  partners: tradePartnersSlice.reducer,
})
