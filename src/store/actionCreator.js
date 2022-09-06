import {CHANGE_INPUT_VALUE,DELETE_TODP_ITEM,ADD_TODD_ITEM,INIT_LIST_ACTION} from './actionType'
export const getInputChangeAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = ()=>({
    type: ADD_TODD_ITEM,
})
export const deleteItemAction = (index)=>({
    type: DELETE_TODP_ITEM,
    index
})

export const initListAction = (data)=>({
    type: INIT_LIST_ACTION,
    data
})