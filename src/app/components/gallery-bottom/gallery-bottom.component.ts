import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-bottom',
  templateUrl: './gallery-bottom.component.html',
  styleUrls: ['./gallery-bottom.component.scss']
})
export class GalleryBottomComponent {

  gallery = [
    {
      id: 1,
      src: 'assets/images/galeria1.png'
    },
    {
      id: 2,
      src: 'assets/images/galeria2.png'
    },
    {
      id: 3,
      src: 'assets/images/galeria3.png'
    },
    {
      id: 4,
      src: 'assets/images/galeria4.png'
    },
    {
      id: 5,
      src: 'assets/images/galeria5.png'
    },
  ]

}
