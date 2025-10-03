import { UpperCasePipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { signal } from '@angular/core';
import { DragonballPageComponent } from '../../../dragonball-page/dragonball-page.component';


@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe, DragonballPageComponent],
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

  HeroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

}
