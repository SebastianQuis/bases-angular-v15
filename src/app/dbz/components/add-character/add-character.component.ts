import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // character que se va a emitir al componente padre, se le asigna un nuevo EventEmitter
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    if (this.character.name.trim().length === 0) return;

    console.log(this.character);
    // emitiendo el character al componente padre
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }


}
