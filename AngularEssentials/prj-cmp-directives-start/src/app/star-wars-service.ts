export class StarWarsService {
  characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''},
    {name: 'Princess Lia', side: ''},
    {name: 'R2D2', side: ''}
  ]
  constructor() {

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
  }
}
