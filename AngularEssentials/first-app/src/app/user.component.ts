import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <input type="text" [(ngModel)]='name' />
  <p> User Component Here</p>
  <p> hello {{ name }} </p>`
})

export class UserComponent {
  name = 'Johan'
}
