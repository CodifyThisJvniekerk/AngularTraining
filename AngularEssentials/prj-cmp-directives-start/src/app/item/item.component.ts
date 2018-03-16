import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { StarWarsService } from '../star-wars-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  swService: StarWarsService;
  constructor(swService: StarWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }

  onAssign(sideToAssign: string) {
    this.swService.updateCharaterSide({name: this.character.name, side: sideToAssign});
  }

}
