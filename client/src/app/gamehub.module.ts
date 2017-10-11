import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialogModule, MatTooltipModule, MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

import { EventService } from "./services/event.service";

import { GameHubComponent } from "./gamehub.component";
import { HomeComponent } from "./home/home.component";
import { NewEventDialogComponent } from "./new-event-dialog/new-event-dialog.component";
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
        NewEventDialogComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatDialogModule,
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        EventService
    ],
    entryComponents: [
        NewEventDialogComponent
    ],
    bootstrap: [GameHubComponent]
})
export class GameHubModule { }
