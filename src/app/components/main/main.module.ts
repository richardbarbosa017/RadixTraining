import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { HeaderModule } from 'src/app/shared/header/header.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
  ],
  exports: [MainComponent]
})
export class MainModule { }
