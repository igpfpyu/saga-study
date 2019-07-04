import * as types from '../HomePage_type';
const initial={
        item:""
};
const handleStarWarsFetchSuccess=(state, action)=>{
        console.log(state, action);
    return {
        ...state,
        item:action.text
    }
}
export default (state=initial, action)=>{
    const handlers={
        [types.ITEM_CLICK_SUCCESS]:handleStarWarsFetchSuccess,
    }
    return handlers[action.type]?handlers[action.type](state, action): state;
}
