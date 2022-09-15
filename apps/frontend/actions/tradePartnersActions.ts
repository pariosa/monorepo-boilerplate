import { Dispatch } from "redux";
import { TradePartner } from "../../backend/src/Types/TradePartner";

export const UPDATE_TRADE_PARTNERS = "UPDATE_TRADE_PARTNERS";
export const CLEAR_TRADE_PARTNERS = "CLEAR_TRADE_PARTNERS";
export const FETCH_TRADE_PARTNERS = "FETCH_TRADE_PARTNERS";
export const FETCH_TRADE_PARTNERS_REQUEST = "FETCH_TRADE_PARTNERS_REQUEST";
export const FETCH_TRADE_PARTNERS_ERROR = "FETCH_TRADE_PARTNERS_ERROR";
import { updateTradePartners } from "../reducers/tradePartnerReducer";

export const fetchTradePartnersRequest = () =>({
    type: FETCH_TRADE_PARTNERS_REQUEST
});

export const clearTradePartners = () =>({
    type: CLEAR_TRADE_PARTNERS
});

const fetchTradePartnersError = () => ({
    type: FETCH_TRADE_PARTNERS_ERROR
});  

export function fetchTradePartnersWithRedux() {
    return (dispatch: Dispatch) => {
    dispatch(fetchTradePartnersRequest());
    return fetchTradePartners().then(([response, json]) =>{
        if(response.status === 200){
        dispatch(updateTradePartners(json.Data))
      }
      else{
        dispatch(fetchTradePartnersError())
      }
    })
  }
}

export function fetchTradePartners() {
  const URL = "http://localhost:8080/tradePartners";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}