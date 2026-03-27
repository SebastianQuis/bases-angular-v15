import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string = 'spiderman';
  public edad: number = 30;

  changeName(): void {
    // throw new Error('Method not implemented.');
    this.nombre = 'ironman';
  }

  changeAge(): void {
    // throw new Error('Method not implemented.');
    this.edad = 40;
  }

  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  getFullName(): string {
    return `${this.nombre} - ${this.edad}`;
  }

}
