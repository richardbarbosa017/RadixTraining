import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
