import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MdButtonModule } from "@angular/material";
import { MdCardModule } from "@angular/material";
import { MdInputModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MwngComponent } from "./mwng.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    declarations: [
        MwngComponent,
        HomeComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [MwngComponent]
})
export class MwngModule { }
