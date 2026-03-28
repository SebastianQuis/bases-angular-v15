import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],

  // exports lo que se quiere exponer al mundo exterior
  exports: [HeroComponent, ListComponent],

  // directiva para uso de ngif ngfor etc
  imports: [CommonModule],
  // providers: [],
  // bootstrap: [AppComponent]
})
export class HeroesModule { }


