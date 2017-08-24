export class Issue {
    title: string;
    url: string;
    state?: string;
    id?: string;

    constructor(title: string, url: string, state?: string, id?: string) {
        this.title = title;
        this.url = url;
        this.state = state;
        this.id = id;
    }
}