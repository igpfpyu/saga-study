import * as types from "../../redux/types";
import {put, takeEvery} from 'redux-saga/effects'
export const fetchStarWarsRequest=()=>{
    return {
        type:types.FETCH_SATR_WARS_REQURES,
    }
}
export const fetchStarWarsPlanetsRequest=()=>({
    type:types.FETCH_SATR_WARS_PLANET_REQURES
})
export function* fetchPerson(action){
    try {
        yield  put({
            type:types.FETCH_SATR_WARS_SUCCESS,
            data:['a','b', 'c','d', 'f']
        })
    } catch (e) {
        console.log(e)
    }
}
export function* fetchPlanets(action){
    try {
        yield put({
            type:types.FETCH_SATR_WARS_PLANET_SUCCESS,
            data:["x",'y','z']
        })
    } catch (e) {
        console.log(e)
    }
}
export default function* saga(){
    yield takeEvery(types.FETCH_SATR_WARS_REQURES, fetchPerson);
    yield takeEvery(types.FETCH_SATR_WARS_PLANET_REQURES, fetchPlanets)
}
