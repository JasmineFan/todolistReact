import {CHANGE_INPUT_VALUE,DELETE_TODP_ITEM,ADD_TODD_ITEM,INIT_LIST_ACTION} from './actionType'
const defaultState = {
    inputValue:"",
    list:[]
}
//reducer 可以接收state， 但是不能修改state
export default (state = defaultState, action)=>{
    if(action.type ===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if(action.type===ADD_TODD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue =''
        return newState
    } else if(action.type===DELETE_TODP_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    } else if(action.type===INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
   
    return state
}