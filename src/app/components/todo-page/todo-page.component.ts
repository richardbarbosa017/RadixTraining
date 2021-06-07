import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/shared/models/todo';
import { TodoPageService } from '../../services/todo-page.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})

export class TodoPageComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  toDos: todo[];
  constructor(private todoService: TodoPageService) {
    this.toDos = [];
   }

  ngOnInit(): void {
    this.todoService.getToDos().subscribe(
      todos => {
        this.toDos = todos;
      });
  }
}
