import { REMOVE_TODO } from '../common/ActionConstants';

export interface IRemoveTodoAction {
    type: string;
    todoItemKey: number;
}

export default function RemoveTodoAction(todoItemKey: number): IRemoveTodoAction {
    return {
        type: REMOVE_TODO,
        todoItemKey: todoItemKey
    }
}