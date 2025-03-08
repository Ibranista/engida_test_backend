import { IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEnum(TaskStatus)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  status?: TaskStatus;
}
