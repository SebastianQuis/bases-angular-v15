import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
})

export class MainComponent {
  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
