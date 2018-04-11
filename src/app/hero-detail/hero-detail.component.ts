import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from '../hero.service';

import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
   @Input() hero: Hero;
  constructor(
    // 保存 HeroDetailComponent 实例的路由信息
    private route: ActivatedRoute,
    private heroService: HeroService,
    // 用于返回上一个视图
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
