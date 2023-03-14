import { Component, Input, Attribute } from '@angular/core';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.scss']
})
export class SocialListComponent {
  @Input()
  position: any;

  listSocial = [
    {
      icon: 'fab fa-facebook-square',
      link: '#'
    },
    {
      icon: 'fab fa-instagram-square',
      link: '#'
    },
    {
      icon: 'fab fa-twitter-square',
      link: '#'
    },
  ]
}
