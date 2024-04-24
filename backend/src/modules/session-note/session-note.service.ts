import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import {
  SessionNote,
  SessionNoteDocument,
} from 'src/schemas/session-note.schema';
import { CreateSessionNoteDto } from './dto/create-session-note.dto';
import { UpdateSessionNoteDto } from './dto/update-session-note.dto';

@Injectable()
export class SessionNoteService {
  constructor(
    @InjectModel(SessionNote.name, 'workOut')
    private sessionNoteModel: Model<SessionNoteDocument>,
  ) {}

  public async getAll(): Promise<SessionNoteDocument[]> {
    const foundItems = await this.sessionNoteModel.find();
    return foundItems;
  }

  public async create(
    createUserDto: CreateSessionNoteDto,
  ): Promise<SessionNoteDocument> {
    const createdBodyPart = new this.sessionNoteModel(createUserDto);
    const createdItem = (await createdBodyPart.save()).toObject();
    return this.findOneById(createdItem._id.toString());
  }

  public async updateOne(id: string, data: UpdateSessionNoteDto) {
    const updated = await this.sessionNoteModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          record_date: data.record_date,
          note: data.note,
        },
      },
      { returnOriginal: false },
    );
    return updated;
  }

  public async deleteOneById(id: string): Promise<DeleteResult> {
    const result = await this.sessionNoteModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
    return result;
  }

  public async findOneById(
    id: string,
  ): Promise<SessionNoteDocument | undefined> {
    const foundItem = await this.sessionNoteModel.findById(id);
    return foundItem;
  }

  public async isDataExist(id: string): Promise<boolean> {
    // 確認資料是否存在 使用 != 比對 null 跟 undefined
    return (await this.sessionNoteModel.exists({ _id: id })) != null;
  }
}
