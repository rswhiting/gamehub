import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MdButtonModule } from "@angular/material";
import { MdInputModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

import { GameService } from "./services/game.service";

import { GameHubComponent } from "./gamehub.component";
import { HomeComponent } from "./home/home.component";
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
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    declarations: [
        GameHubComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MdButtonModule,
        MdInputModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        GameService
    ],
    bootstrap: [GameHubComponent]
})
export class GameHubModule { }
