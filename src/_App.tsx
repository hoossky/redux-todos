import React from 'react';
import './App.css';
import TodoList from "./schedule/TodoList";
import TodoInput from "./schedule/TodoInput";
import {Provider} from 'react-redux'
import store from "./schedule/store/index"
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const _App = () => {
  return <>
      <Provider store = {store}>
        <TodoInput/><br/><TodoList/>
      </Provider>
      </>

}
export default _App;
