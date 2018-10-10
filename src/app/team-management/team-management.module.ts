import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {TeamDashboardComponent} from './containers/team-dashboard/team-dashboard.component';
import {TeamViewerComponent} from './containers/team-viewer/team-viewer.component';

const routes: Routes = [
    {
        path: 'teams',
        children: [
            {path: '', component: TeamDashboardComponent},
            {path: ':id', component: TeamViewerComponent}
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        TeamDashboardComponent,
        TeamViewerComponent
    ]
})
export class TeamManagementModule {
}
