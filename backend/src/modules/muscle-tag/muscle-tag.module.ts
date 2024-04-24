import { Module } from '@nestjs/common';
import { MuscleTagController } from './muscle-tag.controller';
import { MuscleTagService } from './muscle-tag.service';
import { MuscleTag, MuscleTagSchema } from 'src/schemas/muscle-tag.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [MuscleTagController],
  providers: [MuscleTagService],
  imports: [
    MongooseModule.forFeature(
      [{ name: MuscleTag.name, schema: MuscleTagSchema }],
      'workOut',
    ),
  ],
})
export class MuscleTagModule {}
