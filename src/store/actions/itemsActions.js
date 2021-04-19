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
const AddItem_Success = (item) => {
    return {
        type: actionTypes.ADD_ITEM_SUCCESS,
        item: item,
    }
}

const AddItem_Failed = (error) => {
    return {
        type: actionTypes.ADD_ITEM_FAILED,
        error: error
    }
}
export const AddItem = (item) => {
    return dispatch => {
        axios.post(`items.json`,item).then(resp => {
            dispatch(AddItem_Success({id:resp.data.name, ...item}));
        }).catch(error => {
            dispatch(AddItem_Failed(error));

        })
    }
}

const EditItem_Success = (item,id) => {
    return {
        type: actionTypes.EDIT_ITEM_SUCCESS,
        item: item,
        id:id
    }
}

const EditItem_Failed = (error) => {
    return {
        type: actionTypes.EDIT_ITEM_FAILED,
        error: error
    }
}
export const EditItem = (id,item) => {
    return dispatch => {
        axios.patch(`items/${id}.json`,item).then(resp => {
            item={...item,id:id};
            dispatch(EditItem_Success(item,id));
        }).catch(error => {
            dispatch(EditItem_Failed(error));

        })
    }
}

const DeleteItem_Success = (id) => {
    return {
        type: actionTypes.DELETE_ITEM_SUCCESS,
        id: id,
    }
}

const DeleteItem_Failed = (error) => {
    return {
        type: actionTypes.DELETE_ITEM_FAILED,
        error: error
    }
}
export const DeleteItem = (id) => {
    return dispatch => {
        axios.delete(`items/${id}.json`).then(resp => {
            dispatch(DeleteItem_Success(id));
        }).catch(error => {
            dispatch(DeleteItem_Failed(error));

        })
    }
}
const AddBidSuccess=(item)=>{

    return{
        type:actionTypes.ADD_BID_SUCCESS,
        item:item
    }
 }
 const AddBidFailed=(error)=>{

    return{
        type:actionTypes.ADD_BID_FAILED,
        error:error
    }
 }
export const AddBid=(item,id)=>{

    return dispatch=>{
        axios.put(`items/${id}.json`,item).then(resp=>{
            dispatch(AddBidSuccess(item));
        }).catch(error=>{
            dispatch(AddBidFailed(error));
           
        })
    }
    
}

