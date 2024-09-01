import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})

export class HeroesComponent implements OnInit{
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  //heroes = HEROES;
   selectedHero?: Hero;
   heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void{
    this.getHeroes();
  } 

  onSelect(hero:Hero): void{this.selectedHero = hero;}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

