import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Register Task entity
  providers: [TasksService, TasksRepository], // Register TasksRepository as a provider
  controllers: [TasksController],
  exports: [TasksRepository], // Export TasksRepository if needed elsewhere
})
export class TasksModule {}
