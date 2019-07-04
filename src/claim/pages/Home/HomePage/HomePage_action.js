import  * as types from '../HomePage_type';
import {put, takeEvery} from 'redux-saga/effects';

export const itemClick=()=>({type:types.ITEM_CLICK});

function* itemCLick(){
    yield put({
        type:types.ITEM_CLICK_SUCCESS,
        text:"abcddddd"
    })
}
export default function* HomePageActive(){
    yield takeEvery(types.ITEM_CLICK,itemCLick);
}
