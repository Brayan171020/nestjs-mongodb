import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodoSchema,
      },
    ]),
  ],
})
export class TodoModule {}
