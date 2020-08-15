import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { useReducer } from './store/reducers/smurfReducer'

const store = createStore(useReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
<Provider store={store} >

<App />

</Provider>,


 document.getElementById("root"));
