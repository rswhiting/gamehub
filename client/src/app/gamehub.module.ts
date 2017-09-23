import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MdButtonModule } from "@angular/material";
import { MdCardModule } from "@angular/material";
import { MdInputModule } from "@angular/material";
import { MdMenuModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthenticationService } from "./services/authentication.service";
import { UserService } from "./services/user.service";

import { GameHubComponent } from "./gamehub.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterComponent } from "./register/register.component";

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
        path: "register",
        component: RegisterComponent
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
        LoginComponent,
        PageNotFoundComponent,
        RegisterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule,
        MdMenuModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AuthenticationService,
        UserService
    ],
    bootstrap: [GameHubComponent]
})
export class GameHubModule { }
