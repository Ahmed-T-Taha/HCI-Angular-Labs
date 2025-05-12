import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  template: `
<button [ngStyle]="{'background-color': color}" (click)="onClick.emit(true)">
  {{ text }}
</button>
  `,
  styles: `button {
    color: white;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
}`
})

export class ButtonComponent implements OnInit {
  @Input("incrementing") incrementing!: boolean;
  @Output("onClick") onClick: EventEmitter<any> = new EventEmitter();
  text: string = '';
  color: string = '';

  ngOnInit() {
    if (this.incrementing === true) {
      this.text = 'Increment++';
      this.color = 'forestgreen';
    } else {
      this.text = 'Decrement--';
      this.color = 'crimson';
    }
  }
}
