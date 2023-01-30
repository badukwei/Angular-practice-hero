import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero';
import { HEROES } from './../../mocks/mock-heros';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  /**
   * 獲取英雄資訊
   * @returns heroes oberverable
   */
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }
}
