import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { IssueComponent } from "./issues/issue.component";
import { IssueListComponent} from "./issues/issue-list.component";
import { IssuesComponent} from "./issues/issues.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";

@NgModule({
    declarations: [
        AppComponent,
        IssueComponent,
        IssueListComponent,
        IssuesComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}