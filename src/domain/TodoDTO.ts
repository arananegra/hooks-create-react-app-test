import { ItemDTO } from "./ItemDTO";

export class TodoDTO {
    public inputText: string;
    public listOfItems: ItemDTO[];

    constructor() {
        this.inputText = null;
        this.listOfItems = null;
    }
}