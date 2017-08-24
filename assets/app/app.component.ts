import { Component } from '@angular/core';

import { IssueService } from "./issues/issue.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [IssueService]
})
export class AppComponent {
}