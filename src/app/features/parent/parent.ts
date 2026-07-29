import { Component, signal } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-parent',
  imports: [Counter],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  count = signal(1)
}
