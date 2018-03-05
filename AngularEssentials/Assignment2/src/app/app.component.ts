import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  AppItems: string[] = ['Apple', 'Bananas', 'Cheries']
  itemadded = '';
  onItemAdded(event: string) {
    this.AppItems.push(event);
    this.itemadded = event + ' was add to cart.';
  }
}
