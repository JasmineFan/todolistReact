import React, { Component } from "react";
import 'antd/dist/antd.css';
import store from './store'
import {getInputChangeAction, getAddItemAction,deleteItemAction,initListAction, getInitAction} from './store/actionCreator'
import ToDoListUI from './ToDoListUI'


class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick =    this.handleBtnClick.bind(this)  
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (<ToDoListUI 
            inputValue = {this.state.inputValue}
            handleInputChange = {this.handleInputChange}
            handleBtnClick = {this.handleBtnClick}
            list = {this.state.list}
            handleItemDelete={this.handleItemDelete}
            />)
    }
    componentDidMount(){
        const action = getInitAction()
        store.dispatch(action)
       
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default ToDoList