import { Module } from '@nestjs/common';
import { BodyPartController } from './body-part.controller';
import { BodyPartService } from './body-part.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BodyPart, BodyPartSchema } from 'src/schemas/body-part.schema';

@Module({
  controllers: [BodyPartController],
  providers: [BodyPartService],
  imports: [
    MongooseModule.forFeature(
      [{ name: BodyPart.name, schema: BodyPartSchema }],
      'workOut',
    ),
  ],
  exports: [BodyPartService],
})
export class BodyPartModule {}
