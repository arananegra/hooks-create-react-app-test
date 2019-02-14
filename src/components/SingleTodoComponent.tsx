import React from 'react';
import { ItemDTO } from '../domain/ItemDTO';
import { ISingleTodoProps } from './SingleTodoComponent';
import { ListItem, Button } from 'react-md'

export interface ISingleTodoProps {
    itemDTO: ItemDTO;
}

export interface ISingleTodoDispatchProps {
    onClickRemove: (itemKeyPressed: number) => void;
}

export default function SingleTodoComponent(props: ISingleTodoProps & ISingleTodoDispatchProps) {
    return (
        < ListItem primaryText={props.itemDTO.itemText} renderChildrenOutside >
            <Button icon primary onClick={() => props.onClickRemove(props.itemDTO.itemKey)}>delete</Button>
        </ListItem >
    )
}