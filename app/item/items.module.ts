import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ItemsComponents, ItemsRoutingModule } from './item-routing.module';
import { StoreModule } from "@ngrx/store";
import { itemReducer } from "~/item/reducers/items.reducer";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptHttpModule,
        ItemsRoutingModule,
        StoreModule.forFeature("items", itemReducer)
    ],
    declarations: [
        ...ItemsComponents
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemsModule { }
