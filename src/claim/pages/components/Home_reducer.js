import * as types from "../../redux/types";
const initialState={
    people:[],
    planet:[],
}
const handleStarWarsFetchSuccess=(state, action)=>{
    return {
        ...state,
        people:action.data
    }
}
const handleStarWarsPlanetFetchSuccess=(state, action)=>{
    console.log(action.data);
    return {
        ...state,
        planet: action.data
    }
}
export default(state=initialState, action)=>{
    const handlers={
        [types.FETCH_SATR_WARS_SUCCESS]:handleStarWarsFetchSuccess,
        [types.FETCH_SATR_WARS_PLANET_SUCCESS]:handleStarWarsPlanetFetchSuccess
    }
    return handlers[action.type]?handlers[action.type](state, action): state;
}
