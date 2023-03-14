import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-section-description',
  templateUrl: './section-description.component.html',
  styleUrls: ['./section-description.component.scss']
})
export class SectionDescriptionComponent {
  @HostBinding('class')
  class = 'col-lg-6 col-sm-8 company__copy';

  @Input()
  direction: any;
}
