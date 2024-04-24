import { Module } from '@nestjs/common';
import { MuscleTagController } from './muscle-tag.controller';
import { MuscleTagService } from './muscle-tag.service';

@Module({
  controllers: [MuscleTagController],
  providers: [MuscleTagService]
})
export class MuscleTagModule {}
