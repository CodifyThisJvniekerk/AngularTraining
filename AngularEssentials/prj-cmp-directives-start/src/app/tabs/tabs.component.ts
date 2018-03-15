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

  constructor() { }

  ngOnInit() {
  }

  onChoose(side: string) {
    const swService = new StarWarsService();
    this.characters = swService.getCharacters(side);
  }

  getCharacters(chosenList: string): any {
    const swService = new StarWarsService();
    this.characters = swService.getCharacters(chosenList);
    return this.characters;
  }
}
