import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { TaskStatus } from '../task-status-enum';

export class TaskStatusVlidationPipe implements PipeTransform {
  readonly allowedStatuses = Object.values(TaskStatus);

  transform(value: string, metadata: ArgumentMetadata) {
    const formatted = value.toUpperCase();

    if (!this.isStatusAllowed(formatted)) {
      throw new BadRequestException(`status ${formatted} is not allowed`);
    }

    return formatted;
  }

  private isStatusAllowed(status: string) {
    return this.allowedStatuses.includes(status as any);
  }
}
