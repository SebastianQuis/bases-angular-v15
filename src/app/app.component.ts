import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // como usar en html <app-root></app-root>
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primer proyecto en Angular';

}
