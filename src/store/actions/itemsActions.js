import * as actionTypes from "./actionTypes";
import axios from "../../auction-axios";
const AuctionInitSuccess = (items) => {

    return {
        type: actionTypes.AUCTION_INIT_SUCCESS,
        items: items
    }
}
const AuctionInitFailed = (error) => {

    return {
        type: actionTypes.AUCTION_INIT_FAILED,
        error: error
    }
}
export const AuctionInit = () => {

    return dispatch => {
        axios.get("items.json").then(resp => {
            const ids = Object.keys(resp.data);
            const data = Object.values(resp.data);
            const items = ids.map((id, index) => {
                return { id: id, ...data[index] }
            })

            dispatch(AuctionInitSuccess(items));
        }).catch(error => {
            dispatch(AuctionInitFailed(error));

        })

    }
}

const GetItem_Success = (item) => {
    return {
        type: actionTypes.GET_ITEM_SUCCESS,
        item: item,
    }
}

const GetItem_Failed = (error) => {
    return {
        type: actionTypes.GET_ITEM_FAILED,
        error: error
    }
}
export const GetItem = (id) => {
    return dispatch => {
        axios.get(`items/${id}.json`).then(resp => {
            dispatch(GetItem_Success(resp.data));
        }).catch(error => {
            dispatch(GetItem_Failed(error));

        })
    }
}
export const clearItemFromState = () => {
    return {
        type: actionTypes.CLEAR_ITEM_STATE,
        item: null
    }
}


