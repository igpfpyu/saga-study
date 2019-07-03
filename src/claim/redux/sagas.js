import {fork} from 'redux-saga/effects';
import HomePageActive from '../pages/Home/HomePage/HomePage_action'
export default function* mySaga(){
    //fork无阻塞的执行fn,不会暂时Generator,分叉，岔路的意思（并发）；
    //yield fork(fn, ...args)的结果是一个Task对象；---task对象，一个具备某些有用的方法和属性的对象。
    //fn generator函数，或者返回Promise的普通函数；
    //args：一个数组，作为fn的参数；
    yield  fork(HomePageActive);
    // yield all([
    //     takeLatest(types.FETCH_SATR_WARS_REQURES, fetchPerson),
    //     takeLatest(types.FETCH_SATR_WARS_PLANET_REQURES,fetchPlanets)
    // ])

    //join(task)等待fork任务返回结果（task对象）；
    //创建一条Effect描述信息，指示middleware等待之前的fork任务返回结果；
    //task之前的的fork指令返回的Task对象；

    //cancel(task)         指示middleware取消之前的fork任务；

    //select(selector, ...args)    得到Store中的state中的数据；
    //指示middleware调用提供的选择器获取Store state上的数据（如：selector(getState(), ...args)的结果）；
    //selector：Function - 一个(state, ...args)=>args函数，通过当前state和一些可选参数，返回当前Store state上的部分数据；
    //args:Array - 可选参数，传递给选择器（附加在getState后）；
    //如果select调用时参数为空，那就取整个state;



};
