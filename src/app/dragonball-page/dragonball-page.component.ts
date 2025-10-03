import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../components/character-list/character-list.component';
import { Character } from '../interface/interface';


@Component({
  selector: 'app-dragonball-page',
  imports: [ CommonModule, CharacterListComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal<string>("");
  power = signal<number>(0);

  characters = signal<Character[]>([
    {id:1, name:"Goku", power:9001},
    {id:2, name:"Vegueta", power:8001},
    {id:3, name:"Krillin", power:1001},
    {id:4, name:"Yamcha", power:500}
  ]);

  addCharacter(){
    if (this.name() != "" && this.power() != 0 && this.power() >= 0) {
      const nuevoPersonaje : Character = {
        id: this.characters().length + 1,
        name: this.name(),
        power: this.power()
      }
      this.characters.set([...this.characters(), nuevoPersonaje]);
      this.resetFields();
    } 
  }

  resetFields(){
      this.name.set("");
      this.power.set(0);
  }

}
