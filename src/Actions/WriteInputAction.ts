import { WRITE_INPUT } from '../common/ActionConstants';

export interface IWriteInputAction {
    type: string;
    componentId: string;
    text: string;
}

export default function WriteInputAction(componentId: string, text:string): IWriteInputAction {
    return {
        type: WRITE_INPUT,
        componentId: componentId,
        text: text
    }
}