import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { FlappyBirdComponent } from './components/flappy-bird/flappy-bird.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'todo', component: TodoPageComponent},
  {path: 'flappy', component: FlappyBirdComponent},
  //{path: 'home',loadChildren: () => import('./components/main/main.module').then(m => m.MainModule)},
  //{path: 'todo',loadChildren: () => import('./components/todo-page/todo-page.module').then(m => m.TodoPageModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
