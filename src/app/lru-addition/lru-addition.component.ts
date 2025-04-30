import { Component } from '@angular/core';

@Component({
  selector: 'app-lru-addition',
  standalone: false,
  templateUrl: './lru-addition.component.html',
  styleUrl: './lru-addition.component.css'
})
export class LruAdditionComponent {
  num1: number = 0;
  num2: number = 0;
  result: number | null = null;

  add() {
    this.result = this.num1 + this.num2;
  }
}
