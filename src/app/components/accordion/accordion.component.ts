import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  faqList = [
    {
      id: 'headingOne',
      collapseId: 'collapseOne',
      question: 'Lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis iste possimus, aut quaerat quis accusantium ducimus eos velit laudantium autem exercitationem repellendus suscipit nostrum unde recusandae quos. Quo, recusandae eaque.'
    },
    {
      id: 'headingTwo',
      collapseId: 'collapseTwo',
      question: 'Lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iste saepe quos quasi! Repellendus molestias vel, qui tempora labore, iure? Pariatur eveniet delectus ea, veritatis dicta nam provident veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iste saepe quos quasi! Repellendus molestias vel, qui tempora labore, iure? Pariatur eveniet delectus ea, veritatis dicta nam provident veniam. Et!'
    },
    {
      id: 'headingThree',
      collapseId: 'collapseThree',
      question: 'Lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis iste possimus, aut quaerat quis accusantium ducimus eos velit laudantium autem exercitationem repellendus suscipit nostrum unde recusandae quos. Quo, recusandae eaque.'
    },
  ]

}
