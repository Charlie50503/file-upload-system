import { Module } from '@nestjs/common';
import { SessionNoteController } from './session-note.controller';
import { SessionNoteService } from './session-note.service';

@Module({
  controllers: [SessionNoteController],
  providers: [SessionNoteService]
})
export class SessionNoteModule {}
