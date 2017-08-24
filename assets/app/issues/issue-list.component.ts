import { Component, OnInit } from "@angular/core";
import {IssueService} from "./issue.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-issue-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <div class="form-group">
                    <label for="content">Kindly Fill Git Username & Repository Name</label>
                    <input
                            type="text"
                            id="content"
                            class="form-control"
                            placeholder="Username"
                            [ngModel]="issue?.username"
                            name="username"
                            required>
                    <input
                            type="text"
                            id="content"
                            class="form-control"
                            placeholder="Repository Name"
                            [ngModel]="issue?.reponame"
                            name="reponame"
                            required>
                </div>
                <button type="button" class="btn btn-danger" (click)="onClear(f)">Clear</button>
                <button class="btn btn-primary" type="submit">Save</button>
            </form>
            <br>
            <p *ngIf="!issues && isFormSubmitted">Loading...</p>
            <app-issue
                   [issue]="issue"
                    *ngFor="let issue of issues"></app-issue>
        </div>
    `
})
export class IssueListComponent {
    issues;
    issue;
    isFormSubmitted = false;

    constructor(private issueService: IssueService) {}

    onSubmit(form: NgForm) {
        this.issues = null;
        this.isFormSubmitted = true;
        this.issueService.getMessages(form.value)
            .subscribe(
                (issues: any) => {
                    this.issues = issues;
                    this.isFormSubmitted = false;
                }
            );
        this.issue = null;
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.issue = null;
        form.resetForm();
    }
}