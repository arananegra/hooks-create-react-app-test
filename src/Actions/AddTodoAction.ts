import { ADD_TODO } from '../common/ActionConstants';

export interface IAddTodoAction {
    type: string;
    todoText: string;
}

export default function AddTodoAction(todoText: string): IAddTodoAction {
    return {
        type: ADD_TODO,
        todoText: todoText
    }
}