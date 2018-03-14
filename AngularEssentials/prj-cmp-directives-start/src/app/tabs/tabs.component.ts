import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''},
    {name: 'Princess Lia', side: ''},
    {name: 'R2D2', side: ''}
  ]

  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side: string) {
    this.chosenList = side;
  }

  getCharacters(): any {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList}
    );
  }
}
