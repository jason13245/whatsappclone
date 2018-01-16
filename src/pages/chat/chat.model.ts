export class chatMessage{
    constructor(public emmitter:string,public message:string){
        this.emmitter=emmitter;
        this.message=message;
    }
}