import { TodoPageModule } from './components/todo-page/todo-page.module';
import { TodoPageService } from './services/todo-page.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './components/main/main.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { FooterModule } from './shared/footer/footer.module';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlappyBirdComponent } from './components/flappy-bird/flappy-bird.component';
import { HeaderModule } from './shared/header/header.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    TodoPageModule
  ],
  providers: [
    HttpClient,
    TodoPageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
