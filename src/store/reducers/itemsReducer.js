import * as actionTypes from "../actions/actionTypes";

const initialState = {
    items: null,
    error: null,
    item: null
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
        case actionTypes.ADD_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.concat(action.item)
            }
        case actionTypes.ADD_ITEM_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.EDIT_ITEM_SUCCESS:
            let items = [...state.items];
            let editedItemIndex = items.findIndex(x=>x.id===action.id);
            items[editedItemIndex] = action.item;
            return {
                ...state,
                items: items
            }
        case actionTypes.EDIT_ITEM_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.filter(x => x.id !== action.id)
            }
        case actionTypes.DELETE_ITEM_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.CLEAR_ITEM_STATE:
            return {
                ...state,
                item: null
            }
        case actionTypes.ADD_BID_SUCCESS:
            return {
                ...state,
                item: action.item
            }
        case actionTypes.ADD_BID_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}
export default reducer;