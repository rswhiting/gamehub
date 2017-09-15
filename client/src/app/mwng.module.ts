import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { MdButtonModule } from "@angular/material";
import { MdCardModule } from "@angular/material";
import { MdInputModule } from "@angular/material";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class MwngModule { }
