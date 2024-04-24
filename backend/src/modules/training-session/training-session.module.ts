import { Module } from '@nestjs/common';
import { TrainingSessionController } from './training-session.controller';
import { TrainingSessionService } from './training-session.service';
import {
  TrainingSession,
  TrainingSessionSchema,
} from 'src/schemas/training-session.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BodyPartModule } from '../body-part/body-part.module';
import { ExerciseModule } from '../exercise/exercise.module';

@Module({
  controllers: [TrainingSessionController],
  providers: [TrainingSessionService],
  imports: [
    MongooseModule.forFeature(
      [{ name: TrainingSession.name, schema: TrainingSessionSchema }],
      'workOut',
    ),
    ExerciseModule,
    BodyPartModule,
  ],
})
export class TrainingSessionModule {}
