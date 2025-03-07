
export default class Post {

    userId : number;
    id: number;
    title: string;
    body:string;

    constructor(id: number, userId:number, title: string, body:string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userId = userId;
    }
}