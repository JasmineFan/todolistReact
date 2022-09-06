import React from "react";
import { Input, Button, List } from 'antd';

const ToDoListUI= (props)=>{
    return (
        <div style={{ marginTop: 10, marginLeft: '10px' }}>
            <Input value={props.inputValue} placeholder="to do info" style={{ width: '300px', marginRight: '10px' }} onChange={props.handleInputChange} />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            <List
                style={{ marginTop: '10px', width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={()=>{props.handleItemDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ToDoListUI