import { LogService } from './log.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StarWarsService {
  characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''},
    {name: 'Princess Lia', side: ''},
    {name: 'R2D2', side: ''}
  ]
  private logservice: LogService;
  characterschanged = new Subject<void>();

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
    this.characterschanged.next();
    this.logservice.writelog('Changed side of ' + charInfo.name + ' new side: ' + charInfo.side);
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => { return char.name === name;
    });
    if (pos === -1) {
      const newChar = {name: name, side: side};
      this.characters.push(newChar);
    }
  }
}
