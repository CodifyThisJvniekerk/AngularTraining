import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];

  chosenList = 'all';

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
    this.getCharacters();
  }

  onChoose(side: string) {
    this.chosenList = side;
    this.getCharacters();
  }

  getCharacters(): any {
   this.characters = this.swService.getCharacters(this.chosenList)
  }
}
