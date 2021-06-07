import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todo } from '../shared/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoPageService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient,) { }

  getToDos() {
    return this.http.get<todo[]>(this.baseUrl + 'todos');
  }

}
