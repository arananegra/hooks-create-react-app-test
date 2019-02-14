import { TodoDTO } from '../domain/TodoDTO';
import { Action } from "redux";
import { ADD_TODO, REMOVE_TODO, WRITE_INPUT } from '../common/ActionConstants';
import { ItemDTO } from '../domain/ItemDTO';
import { WRITE_TODO_FIELD } from '../common/ComponentIDs';

export interface TodoState {
    todoDTO: TodoDTO
}

export default function TodoReducer(state: TodoState, action: Action): TodoState {
    if (typeof state === 'undefined') {
        let initialTodoDTO = new TodoDTO();
        initialTodoDTO.inputText = "";
        initialTodoDTO.listOfItems = [];
        let initialState: TodoState = {
            todoDTO: initialTodoDTO
        }
        return initialState;
    }
    let newState: TodoState;
    let newPage: TodoDTO;

    switch (action.type) {
        case ADD_TODO:
            newPage = new TodoDTO();
            newPage = { ...state.todoDTO };
            let todoTextFromAction = action['todoText'];
            let newTodoDTO = new ItemDTO();
            newTodoDTO.itemKey = newPage.listOfItems.length;
            newTodoDTO.itemText = todoTextFromAction;
            newPage.listOfItems.push(newTodoDTO)
            newPage.inputText = '';

            newState = { ...state, ...{ todoDTO: newPage } };
            return newState;

        case REMOVE_TODO:
            newPage = new TodoDTO();
            newPage = { ...state.todoDTO };
            let todoKeyToRemove = action['todoItemKey'];

            let indexOfTodoToRemove = newPage.listOfItems.findIndex(singleTodoItem => {
                return singleTodoItem.itemKey === todoKeyToRemove;
            })
            newPage.listOfItems.splice(indexOfTodoToRemove, 1);

            newState = { ...state, ...{ todoDTO: newPage } };
            return newState;

        case WRITE_INPUT:
            newPage = new TodoDTO();
            newPage = { ...state.todoDTO };
            if (action['componentId'] === WRITE_TODO_FIELD) {
                newPage.inputText = action['text'];
            }

            newState = { ...state, ...{ todoDTO: newPage } };
            return newState;

        default:
            return state;
    }

}