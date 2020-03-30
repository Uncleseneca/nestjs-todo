import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

import { TaskStatus } from './task-status-enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { SearchTaskDto } from './dto/search-task.dto';
import { TaskStatusVlidationPipe } from './pipes/task-status-vlidation.pipe';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // @Get()
  // getTasks(@Query(ValidationPipe) searchTaskDto: SearchTaskDto): Task[] {
  //   return this.taskService.getFilteredTasks(searchTaskDto);
  // }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getTaskById(id);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto) {
  //   return this.taskService.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTaskByID(@Param('id') id: string) {
  //   return this.taskService.deleteTaskById(id);
  // }

  // @Patch('/:id/status')
  // updateTaskById(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusVlidationPipe) status: TaskStatus,
  // ) {
  //   return this.taskService.updateTaskById(id, status);
  // }
}
