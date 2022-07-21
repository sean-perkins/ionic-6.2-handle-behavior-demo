import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  modalOpen = false;

  names = ['John', 'Jane', 'Mary', 'Bob', 'Tom'];

  posts = [
    {
      avatarUrl: 'https://pbs.twimg.com/profile_images/647606396452646912/WKgBcrEL_400x400.jpg',
      username: 'jockowillink',
      url: `https://www.bowhunting.com/wp-content/uploads/2022/01/Origin-Camo.jpg`,
      caption: 'Aftermath. American Made.'
    },
    {
      avatarUrl: 'https://di-uploads-pod6.dealerinspire.com/jaguarnewportbeach/uploads/2021/07/Jaguar-Logo.jpeg',
      username: 'jaguarusa',
      url: `https://cdn.motor1.com/images/mgl/BqR7A/s1/jaguar-f-type-coupe.jpg`,
      caption: 'F Type. Performance unmatched.'
    },
    {
      avatarUrl: 'https://pbs.twimg.com/profile_images/647606396452646912/WKgBcrEL_400x400.jpg',
      username: 'jockowillink',
      url: `https://www.bowhunting.com/wp-content/uploads/2022/01/Origin-Camo.jpg`,
      caption: 'Aftermath. American Made.'
    },
    {
      avatarUrl: 'https://pbs.twimg.com/profile_images/647606396452646912/WKgBcrEL_400x400.jpg',
      username: 'jockowillink',
      url: `https://www.bowhunting.com/wp-content/uploads/2022/01/Origin-Camo.jpg`,
      caption: 'Aftermath. American Made.'
    }
  ];

  showModal() {
    this.modalOpen = true;
  }

  onDidDismiss() {
    this.modalOpen = false;
  }


}
