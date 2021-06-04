import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlappyBirdComponent } from './flappy-bird.component';



@NgModule({
  declarations: [FlappyBirdComponent],
  imports: [
    CommonModule
  ],
  exports: [ FlappyBirdComponent ]
})
export class FlappyBirdModule { }
