import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friend } from '../../pages/list/list.model'
import 'rxjs/Rx';

/*
  Generated class for the FriendsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendsProvider {

  constructor(public http: HttpClient) {
  }

  friend:Friend[];

  getFriendList(){
    let data =this.http.get('http://localhost:3000/api/getlist');
    return data.map((data: string[]) => {
      return data.map((ele:string) => JSON.parse(ele));
    })
  }
  addFriend(newFd:Friend){
    console.log('sending');
    return this.http.post('http://localhost:3000/api/addFd',newFd);
  }  
}
