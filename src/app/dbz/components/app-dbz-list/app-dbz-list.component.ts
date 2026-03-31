import { Component, Input } from '@angular/core';
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

}
