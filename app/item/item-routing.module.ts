// Nativescript Imports
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ItemsComponent } from "~/item/items.component";

const itemsRoutes: Routes = [
    { path: '', component: ItemsComponent },
];

// Components Declarations
export const ItemsComponents: any = [
    ItemsComponent
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(itemsRoutes)
    ],
    exports: [NativeScriptRouterModule]
})

export class ItemsRoutingModule { }
