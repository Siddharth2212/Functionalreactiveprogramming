import { Routes, RouterModule } from "@angular/router";

import { IssuesComponent } from "./issues/issues.component";

const APP_ROUTES: Routes = [
    { path: 'issues', component: IssuesComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);