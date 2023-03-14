import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [HeaderComponent]
})

export class HomeComponent {
  constructor(private headerComponent: HeaderComponent) {
  }

  heading = 'Lorem ipsum dolor sit amet';
  description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta optio consequuntur modi ipsam sint ad! Quas nisi molestias, corporis eligendi asperiores necessitatibus quo reiciendis est sunt, doloremque, accusamus deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta optio consequuntur modi ipsam sint ad! Quas nisi molestias, corporis eligendi asperiores necessitatibus quo reiciendis est sunt, doloremque, accusamus deleniti.';

}
