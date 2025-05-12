import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { UserFormComponent } from "./user-form/user-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BodyComponent, StudentDetailsComponent, UserFormComponent],
  template: `
    <app-header></app-header>
    <app-body></app-body>
    <hr>
    <app-student-details></app-student-details>
    <hr>
    <app-user-form></app-user-form>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Event Binding';
}
