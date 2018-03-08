import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
  @Input() hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
