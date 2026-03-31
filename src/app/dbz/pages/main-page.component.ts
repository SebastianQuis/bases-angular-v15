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

}
