import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList'
import {Provider} from 'react-redux'     //Provider 就是一个组件, 核心api
import store from './store'

const App = (
  <Provider store = {store}>
    <TodoList />
  </Provider>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  App
);



