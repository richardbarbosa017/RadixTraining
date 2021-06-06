import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';



@NgModule({
  declarations: [TodoPageComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoPageComponent]
})
export class TodoPageModule { }
