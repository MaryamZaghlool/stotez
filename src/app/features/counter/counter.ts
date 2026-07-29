import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  // model()
  // count = input(0)
   count = model(0) // input + output
  // countChange = output<number>()

  increaseCount() {
    this.count.update(v => v + 1)
    // this.countChange.emit(this.count() + 1)
  }
}
