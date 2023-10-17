import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './schemas/todo.schemas';
import { CreateTodoDto } from './dtos/create-todo';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async create(todo: CreateTodoDto) {
    const createdTodo = new this.todoModel(todo);
    return createdTodo.save();
  }
}
