import { Component, ViewChild, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  contactForm = {
    name: 'Anonym',
    email: '',
    agreement: false,
    contents: {
      topic: '',
      message: '',
    }
  }

  @ViewChild('contactFormRef', {
    read: NgForm, static: true
  })
  
  contactFormRef: NgForm;

  sendMessage(contactForm: NgForm) {
    console.log(contactForm.value)
  }

  resetForm() {
    this.contactFormRef.reset(
      this.contactForm
    )
  }
}
