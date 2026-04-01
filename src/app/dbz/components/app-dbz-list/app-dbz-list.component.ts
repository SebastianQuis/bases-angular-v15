import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './app-dbz-list.component.html',
  styleUrls: ['./app-dbz-list.component.css']
})
export class AppDbzListComponent {

  // recibe la lista desde el componente padre
  @Input()
  public characterList: Character[] = [];



  // emite el evento al componente padre para eliminar un personaje
  @Output()
  public onDeleteCharacter = new EventEmitter<number>();

  deleteCharacterById(index: number): void {
    console.log({ index });
    this.onDeleteCharacter.emit(index);
  }

}
