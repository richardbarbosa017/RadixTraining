import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { FlappyBirdModule } from '../flappy-bird/flappy-bird.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    CarouselModule,
    FlappyBirdModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
