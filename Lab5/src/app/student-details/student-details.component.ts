import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  imports: [FormsModule],
  template: `
    <h2>Student Details</h2>
    <input [(ngModel)]="studentDetails">
    <p>{{ studentDetails }}</p>
    <button (click)="createStudent()">Add new student</button>
    <p>{{ studentAdded }}</p>
  
  `,
  styles: `button {
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
  input {
    padding: 5px;
    border-radius: 5px;
  }
    `

})
export class StudentDetailsComponent {
  studentDetails: string = "-";
  studentAdded: string = "";
  createStudent() {
    this.studentAdded = "Student with id-" + this.studentDetails + " has been created";
  }
}
