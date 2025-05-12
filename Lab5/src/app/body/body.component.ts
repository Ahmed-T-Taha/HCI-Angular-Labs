import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-body',
  imports: [ButtonComponent],
  template: `
    <p>
      Value on number on click event&nbsp;&nbsp;&nbsp;
      <strong>{{ num }}</strong>
    </p>

    <app-button [incrementing]= true (onClick)= "increment()"></app-button>
    <app-button [incrementing]= false (onClick)= "decrement()"></app-button>
  `,
  styles: `strong { font-size: xx-large; }`
})
export class BodyComponent {
  num: number = 0;
  increment() {
    this.num++;
  }
  decrement() {
    this.num--;
  }
}
