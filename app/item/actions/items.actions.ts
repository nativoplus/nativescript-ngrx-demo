import { Action } from "@ngrx/store";

export enum ItemActionTypes {
    ToggleItemLabel = "[Item] Toggle Item Label"
}

export class ToggleItemLabel implements Action {
    readonly type = ItemActionTypes.ToggleItemLabel;
    constructor(public payload: boolean) {

    }
}

export type ItemActions 
= ToggleItemLabel;