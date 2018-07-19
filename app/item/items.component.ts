import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ItemState } from "~/item/states/item.state";
import * as itemActions from "./actions/items.actions";
import * as fromItems from "./reducers/items.reducer";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    showLabel: boolean;

    constructor(private store: Store<ItemState>) {
    };

    ngOnInit(): void {
        this.store.pipe(select(fromItems.getShowLabel))
            .subscribe(showLabel => {
                this.showLabel = showLabel;
            });
    };

    onSwitchChecked(args){
        this.store.dispatch(new itemActions.ToggleItemLabel(args.object.checked));
    };

}