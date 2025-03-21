import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { AuthModule } from 'src/auth/auth.module';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), AuthModule],
  providers: [TasksService, TasksRepository],
  controllers: [TasksController],
  exports: [TasksRepository],
})
export class TasksModule {}
