import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [TodoPageComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [TodoPageComponent],

})
export class TodoPageModule { }
