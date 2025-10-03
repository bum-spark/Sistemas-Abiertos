import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interface/interface';

@Component({
  selector: 'app-character-add',
  imports: [CommonModule],
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent { 

  @Output() public nuevoCharacter = new EventEmitter<Character>();
  
  name = signal<string>("");
  power = signal<number>(0);


  addCharacter(){
    if (this.name() != "" && this.power() != 0 && this.power() >= 0) {
      const nuevoPersonaje: Character = {
      id: 0,
      name: this.name(),
      power: this.power()
    };
      this.nuevoCharacter.emit(nuevoPersonaje);
      this.resetFields();
    } 
  }

  resetFields(){
      this.name.set("");
      this.power.set(0);
  }

}
