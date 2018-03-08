import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroeslist',
  templateUrl: './heroeslist.component.html',
  styleUrls: ['./heroeslist.component.css']
})
export class HeroeslistComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  @Output() selectedHeroChanged = new EventEmitter<Hero>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero) {
    if (this.selectedHero === undefined || this.selectedHero.id !== hero.id) {
      this.selectedHero = hero;
      this.selectedHeroChanged.emit(hero);
    }
  }

}
