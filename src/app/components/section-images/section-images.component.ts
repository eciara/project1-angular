import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-images',
  templateUrl: './section-images.component.html',
  styleUrls: ['./section-images.component.scss']
})
export class SectionImagesComponent {

  @Input()
  image = '';

  @Input()
  alt = '';

}
