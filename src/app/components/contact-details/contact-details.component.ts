import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {

  @Input()
  position: any;

  companyStreet = 'dolor sit 66/6';
  companyCity = "61-333 Poznań";
  campanyPhone = "666 777 888";
  campanyEmail = "lorem@ipsum.pl";

  contact = [
    {
      icon: '',
      name: ''
    },
    {
      icon: '',
      name: ''
    },
    {
      icon: '',
      name: ''
    },
  ]
}
