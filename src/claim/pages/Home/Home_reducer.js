import * as types from "../../redux/types";
const initialState={
    people:[],
    planet:[],
}
const handleStarWarsFetchSuccess=(state, action)=>{
    console.log(action.people);
    return {
        ...state,
        people:action.people
    }
}
const handleStarWarsPlanetFetchSuccess=(state, action)=>{
    return {
        ...state,
        planet: action.planet
    }
}
export default(state=initialState, action)=>{
    const handlers={
        [types.FETCH_SATR_WARS_SUCCESS]:handleStarWarsFetchSuccess,
        [types.FETCH_SATR_WARS_PLANET_SUCCESS]:handleStarWarsPlanetFetchSuccess
    }
    return handlers[action.type]?handlers[action.type](state, action): state;
    // switch (action.type) {
    //     case types.FETCH_SATR_WARS_SUCCESS:
    //         return {
    //             ...state,
    //             people:action.people
    //         }
    //     case types.FETCH_SATR_WARS_PLANET_SUCCESS:
    //         return {
    //             ...state,
    //             planet: action.planet
    //         }
    //     default: return initialState;
    // }
}
