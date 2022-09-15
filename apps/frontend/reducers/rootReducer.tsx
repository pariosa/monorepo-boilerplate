import { combineReducers } from 'redux';
import { Person } from '../../backend/dummyData/dummyData';
import { TradePartner } from '../../backend/src/Types/TradePartner';
import { personsSlice } from './personReducer';
import {  tableSlice, TableState } from './tableReducer';
import { tradePartnersSlice } from './tradePartnerReducer';
import { initialState as initialTableState }  from '../reducers/tableReducer'
export type State = {
    persons: Person[];
    table: TableState,
    tradePartners: TradePartner[]
}
export const initialState =  {
    persons: [],
    table: initialTableState,
    tradePartners:[],
}

// export const rootReducer = combineReducers(reducers);

export const rootReducer = combineReducers({
    persons: personsSlice.reducer,
    table: tableSlice.reducer,
    tradePartners: tradePartnersSlice.reducer
});