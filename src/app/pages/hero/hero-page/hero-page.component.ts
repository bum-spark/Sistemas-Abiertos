import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name= signal("Ironman")
  age = signal(45)

  getHeroDescription (){
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set("Ironman");
    this.age.set(45);
  }

  chageAge(){
    this.age.set(60);
  }

  getNombreCapitalizado(){
    return this.name().toUpperCase();
  }

}
