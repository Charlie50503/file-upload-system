import { Module } from '@nestjs/common';
import { BodyPartController } from './body-part.controller';
import { BodyPartService } from './body-part.service';

@Module({
  controllers: [BodyPartController],
  providers: [BodyPartService]
})
export class BodyPartModule {}
