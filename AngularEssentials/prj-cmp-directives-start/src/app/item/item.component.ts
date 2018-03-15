import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarWarsService } from '../star-wars-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>()
  constructor() { }

  ngOnInit() {
  }

  onAssign(sideToAssign: string) {
    // this.character.side = side;
    // this.sideAssigned.emit()
    const swService = new StarWarsService()
    swService.updateCharaterSide({name: this.character.name, side: sideToAssign});
  }

}
