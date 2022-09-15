import { Person } from "../../backend/dummyData/dummyData";
import { Dispatch } from "redux";
import { updatePersons } from "../reducers/personReducer";
export const UPDATE_PERSONS = "UPDATE_PERSONS";
export const CLEAR_PERSONS = "CLEAR_PERSONS";
export const FETCH_PERSONS = "FETCH_PERSONS";
export const FETCH_PERSONS_REQUEST = "FETCH_PERSONS_REQUEST";
export const FETCH_PERSONS_ERROR = "FETCH_PERSONS_ERROR";

// export const updatePersons = (persons: Array<Person>) =>({
//     type: UPDATE_PERSONS,
//     payload: persons
// });

export const fetchPersonsRequest = () =>({
    type: FETCH_PERSONS_REQUEST
});

export const clearPersons = () =>({
    type: CLEAR_PERSONS
});

const fetchPersonsError = () => ({
    type: FETCH_PERSONS_ERROR
});  

export function fetchPersonsWithRedux() {
    return (dispatch: Dispatch) => {
    dispatch(fetchPersonsRequest());
    return fetchPersons().then(([response, json]) =>{
        if(response.status === 200){
        dispatch(updatePersons(json.Data))
      }
      else{
        dispatch(fetchPersonsError())
      }
    })
  }
}

export function fetchPersons() {
  const URL = "http://localhost:8080/home";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}