import { Module } from '@nestjs/common';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Exercise, ExerciseSchema } from 'src/schemas/exercise.schema';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService],
  imports: [
    MongooseModule.forFeature(
      [{ name: Exercise.name, schema: ExerciseSchema }],
      'workOut',
    ),
  ],
  exports: [ExerciseService],
})
export class ExerciseModule {}
