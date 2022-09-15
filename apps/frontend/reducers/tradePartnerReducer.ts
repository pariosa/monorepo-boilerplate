import { TradePartner } from '../../backend/src/Types/TradePartner';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TradePartnersState {
    partners:TradePartner[]
}

export const initialState = {
    partners: []
} as TradePartnersState;

export const tradePartnersSlice = createSlice({
  name: 'tradepartner',
  initialState,
  reducers: {
    updateTradePartners(state, action: PayloadAction<TradePartner[]>) {
        const tradePartners = action.payload
        return {...state,
            partners:[ ...tradePartners ]
        }
    },
    clearTradePartners(state) {
      return {
        ...state, 
        tradePartners:[]
      }
    },

  },
})

export const { updateTradePartners, clearTradePartners } = tradePartnersSlice.actions
