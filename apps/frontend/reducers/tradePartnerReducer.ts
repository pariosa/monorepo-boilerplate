import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type TradePartner = {
  vendorId: string
  vendorName: string
}

export interface TradePartnerState {
  [index: number]: TradePartner
}

export const initialState = [] as TradePartnerState

export const tradePartnersSlice = createSlice({
  name: 'tradepartner',
  initialState,
  reducers: {
    updateTradePartners(state, action: PayloadAction<TradePartner[]>) {
      return action.payload
    },
    clearTradePartners(state) {
      return []
    },
  },
})

export const { updateTradePartners, clearTradePartners } =
  tradePartnersSlice.actions
