import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
// - createSagaMiddleware(...args)
// - 参数是一个数组，里面是generator函数列表。
// - 创建一个redux中间件，并将sagas和redux store建立链接；
const sagaMiddleware=createSagaMiddleware();
export default createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
//动态执行saga, 用于applyMiddleware阶段之后执行sagas.返回一个task描述对象；
//sagaMiddleware.run(saga, ...args)
//saga:function 一个generator函数；
//args：Array提供给saga的参数（除了store的getState方法）；
sagaMiddleware.run(mySaga);
