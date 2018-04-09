import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService

  constructor(activeRoute: ActivatedRoute, swservice: StarWarsService) {
    this.activatedRoute = activeRoute;
    this.swService = swservice;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
      }
    );
  }

}
