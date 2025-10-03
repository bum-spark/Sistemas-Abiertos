import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interface/interface';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  //explicacion con esta linea - parte coin la version de stansdalone, con el uso de señales
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {

  //generar estructura y logica del componente

  name = signal<string>("");
  power = signal<number>(0);

  // characters = signal<Character[]>([
  //     {id:1, name:"Goku", power:9001},
  //     {id:2, name:"Vegueta", power:8001},
  //     {id:3, name:"Krillin", power:1001},
  //     {id:4, name:"Yamcha", power:500}
  //   ]);

  characters = input.required<Character[]>();





}
