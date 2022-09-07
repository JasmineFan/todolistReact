import React, { Component } from 'react'
import store from './store'
import { connect } from 'react-redux'   //第二个核心api

const ToDoList = (props) => {
    const { inputValue, handleClick, handleInputChange, list } = props
    return (
        <div>
            <input value={inputValue} onChange={handleInputChange}></input>
            <button onClick={handleClick}>提交</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={() => props.handleDelete(index)} key={index}> {item} </li>
                    })
                }
            </ul>
        </div>
    )
}

// class ToDoList extends Component {
//     render() {
//         const { inputValue, handleClick ,handleInputChange, list} = this.props
//         return (
//             <div>
//                 <input value = {inputValue} onChange={handleInputChange}></input>
//                 <button onClick={handleClick}>提交</button>
//                 <ul>
//                     {
//                         list.map((item , index) => {
//                             return <li onClick={()=>this.props.handleDelete(index)} key={index}> {item} </li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,         //inputValue 会映射到props 的inputValue 里面去
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)        //让TodoList 和 store 做连接，规则是mapStateToProps