import { LogService } from './log.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

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
  private httpService: Http

  constructor(logservice: LogService, httpservice: Http) {
    this.logservice = logservice;
    this.httpService = httpservice;
  }

  fetchCharaters() {
    this.httpService.get('https://swapi.co/api/people/')
    .map(
      (response: Response) => {
        const data = response.json();
        const extactedChars = data.results;
        const chars = extactedChars.map((char) => {
          return {name: char.name, side: ''};
        });
        return chars;
      }
    )
    .subscribe(
      (data) => {
        this.characters = data;
        this.characterschanged.next();
    });
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
