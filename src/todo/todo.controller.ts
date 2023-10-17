import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Put,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/create-todo';
import { UpdateTodoDto } from './dtos/update-todo';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createTtodo: CreateTodoDto) {
    return this.todoService.create(createTtodo);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateTtodo: UpdateTodoDto,
  ) {
    return this.todoService.update(id, updateTtodo);
  }

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
