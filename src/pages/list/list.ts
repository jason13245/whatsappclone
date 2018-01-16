import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Friend } from '../list/list.model';
import { FriendsProvider } from '../../providers/friends/friends.service';
import { ChatPage } from "../chat/chat";

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private friendService: FriendsProvider,
    public modalCtrl: ModalController) {
  }


  friends: Friend[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    this.friendService.getFriendList().subscribe((friends: Friend[]) => {
      this.friends = friends;
    })

  }
  openModal() {
    let modal = this.modalCtrl.create('ModalPage');
    modal.onDidDismiss(() => {
      this.friendService.getFriendList().subscribe((friends: Friend[]) => {
        this.friends = friends;
      })
    })
    modal.present();
  }
  openChat(name) {
    this.navCtrl.push(ChatPage,{name:name});
  }

}


