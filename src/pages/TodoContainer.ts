import { connect } from "react-redux";
import { IReducers } from '../reducers/IndexReducers';
import { ITodoProps, ITodoDispatchProps } from "./Todo";
import AddTodoAction from "../Actions/AddTodoAction";
import Todo from './Todo';
import RemoveTodoAction from "../Actions/RemoveTodoAction";
import WriteInputAction from "../Actions/WriteInputAction";
import { WRITE_TODO_FIELD } from '../common/ComponentIDs';

const mapStateToProps = (state: IReducers): ITodoProps => ({
    todoItems: state['reducers'].TodoReducer.todoDTO,
});

const mapDispatchToProps = (dispatch): ITodoDispatchProps => ({
    onClickAddTodo: (todoText: string) => dispatch(AddTodoAction(todoText)),
    onClickRemoveTodo: (itemKey: number) => dispatch(RemoveTodoAction(itemKey)),
    onWriteTextOfNewTodo: (todoText: string) => dispatch(WriteInputAction(WRITE_TODO_FIELD, todoText))
});

export const TodoContainer = connect<ITodoProps, ITodoDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Todo);