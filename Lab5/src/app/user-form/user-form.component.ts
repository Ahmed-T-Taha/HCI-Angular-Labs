import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, NgIf],
  template: `
    <h2>Add User</h2>
    <label><strong>First Name</strong></label><br>
    <input [(ngModel)]="firstNameInput" (ngModelChange)="onFirstNameChange($event)"><br><br>

    <label><strong>Second Name</strong></label><br>
    <input [(ngModel)]="secondNameInput" (ngModelChange)="onSecondNameChange($event)"><br><br>

    <label><strong>Display Name</strong></label><br>
    <input [(ngModel)]="displayNameInput" (ngModelChange)="onDisplayNameChange($event)"><br><br>

    <p>My form details:-</p>
    <div>
      <p>myForm value:</p>
      <p>{{ '{' }}</p>
      <p *ngIf="firstNameOutput">&nbsp;&nbsp;&nbsp;&nbsp;"firstname": "{{firstNameOutput}}",</p>
      <p *ngIf="secondNameOutput">&nbsp;&nbsp;&nbsp;&nbsp;"secondname": "{{secondNameOutput}}",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"displayname": "{{displayNameOutput}}"</p>
      <p>{{ '}' }}</p>
    </div>
  `,

  styles: `
    input {
    padding: 5px;
    border-radius: 5px;
  }
  div {
    background-color: lightgray;
    padding: 5px;
    border-radius: 5px;
  }
  p {
    margin: 0px;
    padding: 0px;
  }
  `
})
export class UserFormComponent {
  firstNameInput: string = "";
  secondNameInput: string = "";
  displayNameInput: string = "";

  firstNameOutput: string = "";
  secondNameOutput: string = "";
  displayNameOutput: string = "";

  onFirstNameChange(event: any) {
    this.firstNameOutput = event;
    this.displayNameInput = event;
  }

  onSecondNameChange(event: any) {
    this.secondNameOutput = event;
  }

  onDisplayNameChange(event: any) {
    this.displayNameOutput = event;
  }
}
