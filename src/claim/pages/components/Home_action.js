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
        // const data = yield call(Api.fetchUser, action.payload.url);
        //put(action); - 发起一个action 到store;
        //action：Object;
        //put是异步的，不会立即发生。

        yield put({
            type:types.FETCH_SATR_WARS_PLANET_SUCCESS,
            data:["x",'y','z']
        })
    } catch (e) {
        console.log(e)
    }
}
export default function* saga(action){
    //takeEvery传入一个action类型和对应要执行的异步操作方法。
    //捕捉action执行异步函数；
    //在发起（dispatch）到 Store 并且匹配 pattern 的每一个 action 上派生一个 saga
    yield takeEvery(types.FETCH_SATR_WARS_REQURES, fetchPerson);
    yield takeEvery(types.FETCH_SATR_WARS_PLANET_REQURES, fetchPlanets)
}


//call(fn, ...args)阻塞执行，call执行完，才会往下执行；
//fn：Function - 一个Generator函数，或者返回Promise的普通函数；
//args：Array，一个数组，作为fn的参数；
//yield[call(fetch, '/users'), call()s ];

//race(effects)
//effects : Object - 一个{label:effect, ...}形式的字典对象；


