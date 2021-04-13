import * as actionTypes from "../actions/actionTypes";

const initialState = {
    items: null,
    error: null,
    item:null
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUCTION_INIT_SUCCESS:
            return {
                ...state,
                items: action.items,
               
            }
        case actionTypes.AUCTION_INIT_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.GET_ITEM_SUCCESS:
            return {
                ...state,
                item: action.item
            }
        case actionTypes.GET_ITEM_FAILED:
            return {
                ...state,
                error: action.error
            }
            case actionTypes.CLEAR_ITEM_STATE:
                return{
                    ...state,
                    item:null
                }
        default:
            return state;
    }
}
export default reducer;