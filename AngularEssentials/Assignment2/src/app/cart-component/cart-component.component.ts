import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  @Input() Items: string[];
  itemToAdd = '';
  @Output() ItemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onAddItemClicked () {
    this.ItemAdded.emit(this.itemToAdd);
  }

}
