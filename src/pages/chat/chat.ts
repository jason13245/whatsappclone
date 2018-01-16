import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from "../../providers/chat/chat.service";
import { chatMessage } from './chat.model';
import { FormsModule } from '@angular/forms';
import { FormControl,FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public chatServices:ChatProvider) {
  }
  messages:chatMessage[];

  ionViewDidLoad() {
    this.chatServices.getchatmsg().subscribe((message:chatMessage[])=>{
      this.messages=message;
    })
    
  }
  name=this.navParams.get('name');
  msgForm = new FormGroup({msg:new FormControl});
  onEmitMsg(){
    let msg:chatMessage= new chatMessage('Jason',this.msgForm.value.msg);
    let name:string= this.name;
    this.chatServices.emitMessage(name,msg);
    // this.chatServices.getchatmsg().subscribe((message:chatMessage[])=>{
    //   this.messages=message;
    // })
  }
  
}
