import { Hero } from '../model/hero';
import { HEROES } from './../../mocks/mock-heros';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES
  }
}
