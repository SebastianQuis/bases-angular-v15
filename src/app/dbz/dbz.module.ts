import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main-page.component';
import { AppDbzListComponent } from './components/app-dbz-list/app-dbz-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    AppDbzListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    // usando en ngModel
    FormsModule
  ],
})
export class DbzModule { }
