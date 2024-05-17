import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesListComponent } from './animes-list/animes-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[AnimesListComponent],
  declarations: [AnimesListComponent]
})
export class AnimesModule { }
