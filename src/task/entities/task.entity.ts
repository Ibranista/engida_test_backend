import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

export enum TaskStatus {
  TODO = 'To Do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.TODO })
  status: TaskStatus;

  @CreateDateColumn()
  createdAt: Date;
}
