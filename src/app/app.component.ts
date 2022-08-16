import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = {
  firstName: "Marcos",
  lastName: 'Cappelli',
  }

  userData = {
    email: 'cappelli.m@gmail.com',
    role: 'Admin',
  }


  title = 'curso-angular';
}
