import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chatMessage } from '../../pages/chat/chat.model';
import { Socket } from "ng-socket-io";
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';


/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {
  private checkmsg:Subject<any>;

  constructor(public http: HttpClient,private socket:Socket) {
    this.checkmsg = new Subject
    console.log('Hello ChatProvider Provider');
    socket.on('chatmsgupdate',(data)=>{
      this.checkmsg.next(data);
    })
  }
  emitMessage=(name:string,message:chatMessage)=>{
    let msg=JSON.stringify(message);
    this.socket.emit('chatmessage',({name:name,msg:msg}));
  };

  getchatmsg=()=>{
    return this.checkmsg.asObservable();
  }
  
}
