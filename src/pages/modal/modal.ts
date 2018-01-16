import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,ViewController } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Friend } from "../list/list.model";
import { FriendsProvider } from "../../providers/friends/friends.service";
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  providers:[FriendsProvider]
})
export class ModalPage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public friendService:FriendsProvider) {
  }

  add_Fd_Form = new FormGroup({
    name : new FormControl(null,Validators.required),
    icon : new FormControl(null,Validators.required)
  })

  ionViewDidLoad() {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  on_Add_Fd_Form_Submit(){
    console.log(this.add_Fd_Form.value);
    this.friendService.addFriend(new Friend(this.add_Fd_Form.value.name,this.add_Fd_Form.value.icon))
    .subscribe((result)=>{
      console.log(result);
    });
    this.viewCtrl.dismiss();
  }

}
