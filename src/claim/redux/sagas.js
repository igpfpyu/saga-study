import {fork} from 'redux-saga/effects';
import HomeAction from '../pages/components/Home_action';
export default function* mySaga(){
    yield fork(HomeAction)
    // yield all([
    //     takeLatest(types.FETCH_SATR_WARS_REQURES, fetchPerson),
    //     takeLatest(types.FETCH_SATR_WARS_PLANET_REQURES,fetchPlanets)
    // ])
};
