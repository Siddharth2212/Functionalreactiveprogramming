import { Http, Response} from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { ErrorService } from "../errors/error.service";

@Injectable()
export class IssueService {
    constructor(private http: Http, private errorService: ErrorService) {
    }

    getMessages(repodata) {
        console.log('http://localhost:3000/issue/'+repodata.username+'/'+repodata.reponame);
        return this.http.get('http://localhost:3000/issue/'+repodata.username+'/'+repodata.reponame)
            .map((response: Response) => {
                const issues = JSON.parse(response.json().obj);
                return issues;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}