import { Component, ViewChild } from '@angular/core';
import { clippingParents } from '@popperjs/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  @ViewChild('itemForm', {
    read: NgForm,
    static: true,
  })
  // itemForm: NgForm;
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  information = 'Thank you the form has been sent';
  IsmodelShow = true;

  closeModal() {
    this.IsmodelShow = true;
  }
}
