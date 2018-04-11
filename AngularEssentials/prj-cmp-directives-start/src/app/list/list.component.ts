import { Component, OnInit, Input, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars-service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedsite = 'all';
  subscription: Subscription
  subCharactersFetched: Subscription

  constructor(activeRoute: ActivatedRoute, swservice: StarWarsService) {
    this.activatedRoute = activeRoute;
    this.swService = swservice;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.loadedsite = params.side;
        this.characters = this.swService.getCharacters(params.side);
      }
    );
    this.subscription = this.swService.characterschanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedsite);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
