import { combineReducers } from "redux";
import TodoReducer from './TodoReducer';
import { TodoState } from './TodoReducer';

export interface IReducers {
    TodoReducer: TodoState,
}

export default combineReducers <IReducers> ({
    TodoReducer
}) 