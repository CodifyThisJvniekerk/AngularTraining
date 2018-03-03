import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: string[] = ['Apples', 'Bananas', 'Cherries'];
  onItemAdded(event: string) {
    this.items.push(event);
  }
}
