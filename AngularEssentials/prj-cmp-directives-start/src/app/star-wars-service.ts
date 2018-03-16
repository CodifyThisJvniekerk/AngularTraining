import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {
  characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''},
    {name: 'Princess Lia', side: ''},
    {name: 'R2D2', side: ''}
  ]
  private logservice: LogService;

  constructor(logservice: LogService) {
    this.logservice = logservice;
  }
  getCharacters(chosenList: string): any {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList}
    );
  }

  updateCharaterSide(charInfo): void {
    this.characters.find((char) => {
      return char.name === charInfo.name;
    }).side = charInfo.side;
    this.logservice.writelog('Changed side of ' + charInfo.name + ' new side: ' + charInfo.side);
  }
}
