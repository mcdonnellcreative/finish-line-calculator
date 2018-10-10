import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {TeamManagementModule} from "./team-management/team-management.module";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes),
        TeamManagementModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
