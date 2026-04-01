import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
})

export class MainComponent {

  public characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  // mismo nombre que el evento emitido en el componente hijo
  onNewCharacter(character: Character): void {
    console.log("Main page: ", character);
    this.characters.push(character);
  }

  // mismo nombre que el evento emitido en el componente hijo
  onDeleteCharacter(index: number): void {
    console.log("Main page: ", index);
    this.characters.splice(index, 1);
  }


}
