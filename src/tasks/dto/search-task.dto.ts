import { TaskStatus } from '../task-status.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class SearchTaskDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsIn(Object.values(TaskStatus))
  status: TaskStatus;
}
