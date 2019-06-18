import * as types from "../../redux/types";
import {put, takeEvery} from 'redux-saga/effects'
export const fetchStarWarsRequest=()=>({type:types.FETCH_SATR_WARS_REQURES});
export const fetchStarWarsPlanetsRequest=()=>({type:types.FETCH_SATR_WARS_PLANET_REQURES});
export default function* HomeAction(){
    //takeEvery传入一个action类型和对应要执行的异步操作方法。
    //捕捉action执行异步函数；
    //在发起（dispatch）到 Store 并且匹配 pattern 的每一个 action 上派生一个 saga
    yield takeEvery(types.FETCH_SATR_WARS_REQURES, function* (action){
            try {
                yield put({
                    type:types.FETCH_SATR_WARS_SUCCESS,
                    people:['a','b', 'c','d', 'f']
                })
            } catch (e) {
                console.log(e)
            }
    });
    yield takeEvery(types.FETCH_SATR_WARS_PLANET_REQURES, function* (){
        try {
            // const data = yield call(Api.fetchUser, action.payload.url);
            //put(action); - 发起一个action 到store;
            //action：Object;
            //put是异步的，不会立即发生。
            yield put({
                type:types.FETCH_SATR_WARS_PLANET_SUCCESS,
                planet:["x",'y','z']
            })
        } catch (e) {
            console.log(e)
        }
    })
}


//call(fn, ...args)阻塞执行，call执行完，才会往下执行；
//fn：Function - 一个Generator函数，或者返回Promise的普通函数；
//args：Array，一个数组，作为fn的参数；
//yield[call(fetch, '/users'), call()s ];

//race(effects)
//effects : Object - 一个{label:effect, ...}形式的字典对象；


