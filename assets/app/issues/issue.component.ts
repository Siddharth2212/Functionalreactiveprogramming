import { Component, Input } from "@angular/core";

import { Issue } from "./issue.model";

@Component({
    selector: 'app-issue',
    templateUrl: './issue.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class IssueComponent {
    @Input() issue: Issue;

    constructor() {}
}