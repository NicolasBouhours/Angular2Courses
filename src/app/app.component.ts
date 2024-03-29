import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Inline template </h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete = true">Click to delete</button>
    <button (click)="test = 'Changed value'">Click change content</button>
    <button (click)="boundValue = 2000">Click to change value</button>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  delete = false;
  test = 'Starting value';
  boundValue = 1000;
}
