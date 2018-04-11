import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';


/*
import {HEROES} from '../mock-heroes';
*/

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 /* heroes = HEROES;*/
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  // 未跳转选择方法
 /* onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/


}


