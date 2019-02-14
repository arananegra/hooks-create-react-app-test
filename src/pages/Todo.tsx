import Button from '@atlaskit/button';
import { FieldTextStateless } from '@atlaskit/field-text';
import React, { useState, useEffect } from 'react';
import SingleTodoComponent from '../components/SingleTodoComponent';
import { ItemDTO } from '../domain/ItemDTO';
import { TodoDTO } from '../domain/TodoDTO';
import { ITodoProps } from './Todo';
import { List, Subheader, Paper } from 'react-md';
import { toast } from 'react-toastify';


export interface ITodoProps {
    todoItems: TodoDTO;
}

export interface ITodoDispatchProps {
    onClickAddTodo: (todoText: string) => void;
    onClickRemoveTodo: (itemKey: number) => void;
    onWriteTextOfNewTodo: (todoText: string) => void;
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const notify = (text) => toast.error(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});

export default function Todo(props: ITodoDispatchProps & ITodoProps) {
    const { width, height } = useWindowSize()
    return (
        <div style={{ display: "flex", flex: "1", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", padding: "40px" }}>
            <div style={{ paddingRight: "10px" }}>
                <FieldTextStateless
                    label="Añadir un nuevo elemento"
                    onChange={(e: any) => props.onWriteTextOfNewTodo(e.target.value)}
                    value={props.todoItems.inputText}
                    required
                />
            </div>
            <div style={{ paddingTop: "42px" }}>
                <Button
                    isLoading={false}
                    appearance={"primary"}
                    onClick={() => {
                        props.todoItems.inputText === "" ?
                            notify("No se permiten entradas vacías") : props.onClickAddTodo(props.todoItems.inputText)
                    }}>
                    {capitalize("añadir TODO")}
                </Button>
            </div>

            <div style={{ paddingLeft: "30px" }}>
                <List>
                    <Paper>
                        <Subheader primaryText="Cosas que hacer" primary />
                        <div style={{ display: "flex", flex: "1", flexDirection: "column", justifyContent: "space-between", padding: "40px" }}>
                            {
                                props.todoItems.listOfItems.map((singleTodoItem: ItemDTO) => {
                                    return (
                                        <div style={{ paddingBottom: "20px" }} key={singleTodoItem.itemKey}>
                                            <SingleTodoComponent
                                                itemDTO={singleTodoItem}
                                                onClickRemove={(itemKeyPressed => props.onClickRemoveTodo(itemKeyPressed))}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Paper>
                </List>

            </div>
        </div>
    )
}

export function useWindowSize() {
    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}