import { HEROES } from './../mocks/mock-heros';
import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heros = HEROES;
  selectedHero?: Hero;
  constructor() {}

  ngOnInit(): void {

  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
