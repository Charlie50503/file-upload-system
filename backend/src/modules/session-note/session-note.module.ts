import { Module } from '@nestjs/common';
import { SessionNoteController } from './session-note.controller';
import { SessionNoteService } from './session-note.service';
import {
  SessionNote,
  SessionNoteSchema,
} from 'src/schemas/session-note.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [SessionNoteController],
  providers: [SessionNoteService],
  imports: [
    MongooseModule.forFeature(
      [{ name: SessionNote.name, schema: SessionNoteSchema }],
      'workOut',
    ),
  ],
})
export class SessionNoteModule {}
