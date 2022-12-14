import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
import {getInputChangeAction, getAddItemAction,deleteItemAction} from './store/actionCreator'
class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick =    this.handleBtnClick.bind(this)  
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: '10px' }}>
                <Input value={this.state.inputValue} placeholder="to do info" style={{ width: '300px', marginRight: '10px' }} onChange={this.handleInputChange} />
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                <List
                    style={{ marginTop: '10px', width: '300px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
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