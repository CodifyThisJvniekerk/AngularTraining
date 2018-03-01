import { Component } from '@angular/core'
import { templateSourceUrl } from '@angular/compiler';

@Component({
  selector: 'app-user',
  template: `
  <input type="text" (input)="onUserInput($event)" [value]="username"/>
  <p> User Component Here</p>
  <p> hello {{ username }} </p>`
})

export class UserComponent {
  username = 'Johan'

  onUserInput(event): void {
    this.username = event.target.value;
  }
}
