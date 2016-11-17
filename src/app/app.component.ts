import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Inline template </h1>
    <fa-lifecycle *ngIf="!delete"></fa-lifecycle>
    <button (click)="delete = true">Click to delete</button>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  delete = false;
}
