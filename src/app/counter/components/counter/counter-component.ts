import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
    <p>Counter {{ counter }}</p>
    <button (click)="addOrLessCounter(-1)">Decrement</button>
    <button (click)="reset()">Reset</button>
    <button (click)="addOrLessCounter(1)">Increment</button>
    </div>
  `
})

export class CounterComponent {

  public counter: number = 10;


  reset() {
    this.counter = 10;
  }

  // funciones
  addOrLessCounter(value: number): void {
    if (this.counter + value < 0) {
      this.counter = 0;
      return;
    }
    this.counter += value;
  }


}
