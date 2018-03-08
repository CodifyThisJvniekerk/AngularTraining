import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroeslist',
  templateUrl: './heroeslist.component.html',
  styleUrls: ['./heroeslist.component.css']
})
export class HeroeslistComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  @Output() selectedHeroChanged = new EventEmitter<Hero>();
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero) {
    if (this.selectedHero === undefined || this.selectedHero.id !== hero.id) {
      this.selectedHero = hero;
      this.selectedHeroChanged.emit(hero);
    }
  }

}
