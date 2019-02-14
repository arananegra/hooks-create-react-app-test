import React from 'react';
import { Provider } from "react-redux";
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import * as ReduxThunk from "redux-thunk";
import { TodoContainer } from './pages/TodoContainer';
import reducers from './reducers/IndexReducers';

const reducer = combineReducers({
  reducers
});

const middlewares = [ReduxThunk["default"], logger];

export const store = createStore((reducer),
  composeWithDevTools(
    applyMiddleware(...middlewares))
);

export default function App() {

  return (
    <Provider store={store}>
      <ToastContainer  transition={Flip}/>
      <div style={{ display: "flex", flex: "1", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
        <h2>Lista de TODOs</h2>
        <TodoContainer/>
      </div>
    </Provider>
  );
}
