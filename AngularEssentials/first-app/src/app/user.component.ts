import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <input type="text" [(ngModel)]='name' />
  <p> User Component Here</p>
  <p> hello {{ name }} </p>`
})

export class UserComponent {
  @Input() name = 'Johan'
}
