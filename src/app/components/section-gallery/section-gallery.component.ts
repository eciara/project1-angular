import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail  from 'lightgallery/plugins/thumbnail';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-section-gallery',
  templateUrl: './section-gallery.component.html',
  styleUrls: ['./section-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SectionGalleryComponent {
  
  private lightGallery!: LightGallery;
  private needRefresh = false;

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }

  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  images = [
    {
      id: '1',
      src: '../../../assets/gallery/gallery-1.jpg',
      thumbs: '../../../assets/gallery/thumbs/gallery-1.jpg'
    },
    {
      id: '2',
      src: '../../../assets/gallery/gallery-2.jpg',
      thumbs: '../../../assets/gallery/thumbs/gallery-2.jpg'
    },
    {
      id: '3',
      src: '../../../assets/gallery/gallery-3.jpg',
      thumbs: '../../../assets/gallery/thumbs/gallery-3.jpg'
    },
    {
      id: '4',
      src: '../../../assets/gallery/gallery-4.jpg',
      thumbs: '../../../assets/gallery/thumbs/gallery-4.jpg'
    },
    {
      id: '5',
      src: '../../../assets/gallery/gallery-5.jpg',
      thumbs: '../../../assets/gallery/thumbs/gallery-5.jpg'
    },
    {
      id: '6',
      src: '../../../assets/gallery/gallery-6.jpg',
      thumbs: '../../../assets/gallery/thumbs/gallery-6.jpg'
    },
    {
      id: '7',
      src: '../../../assets/gallery/gallery-7.jpg',
      thumbs: '../../../assets/gallery/thumbs/gallery-7.jpg'
    },
    {
      id: '8',
      src: '../../../assets/gallery/gallery-8.jpg',
      thumbs: '../../../assets/gallery/thumbs/gallery-8.jpg'
    },
    {
      id: '9',
      src: '../../../assets/gallery/gallery-9.jpg',
      thumbs: '../../../assets/gallery/thumbs/gallery-9.jpg'
    },
  ]


}
