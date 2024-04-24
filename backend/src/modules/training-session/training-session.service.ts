import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import {
  TrainingSession,
  TrainingSessionDocument,
} from 'src/schemas/training-session.schema';
import { CreateTrainingSessionDto } from './dto/create-training-session.dto';
import { UpdateTrainingSessionDto } from './dto/update-training-session.dto';
import { BodyPartService } from '../body-part/body-part.service';
import { ExerciseService } from '../exercise/exercise.service';

@Injectable()
export class TrainingSessionService {
  constructor(
    @InjectModel(TrainingSession.name, 'workOut')
    private sessionNoteModel: Model<TrainingSessionDocument>,
    private bodyPartService: BodyPartService,
    private exerciseService: ExerciseService,
  ) {}

  public async getAll(): Promise<TrainingSessionDocument[]> {
    const foundItems = await this.sessionNoteModel.find();
    return foundItems;
  }

  public async create(
    data: CreateTrainingSessionDto,
  ): Promise<TrainingSessionDocument> {
    if (
      !(await this.bodyPartService.isDataExist(data.part_id.toString())) ||
      !(await this.exerciseService.isDataExist(data.exercise_id.toString()))
    ) {
      throw new NotFoundException('找不到該部位或運動項目');
    }
    const createdBodyPart = new this.sessionNoteModel(data);
    const createdItem = (await createdBodyPart.save()).toObject();
    return this.findOneById(createdItem._id.toString());
  }

  public async updateOne(id: string, data: UpdateTrainingSessionDto) {
    if (
      !(await this.bodyPartService.isDataExist(data.part_id.toString())) ||
      !(await this.exerciseService.isDataExist(data.exercise_id.toString()))
    ) {
      throw new NotFoundException('找不到該部位或運動項目');
    }
    const updated = await this.sessionNoteModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          part_id: data.part_id,
          exercise_id: data.exercise_id,
          completed: data.completed,
          reps: data.reps,
          sets: data.sets,
          rep: data.rep,
          date: data.date,
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
  ): Promise<TrainingSessionDocument | undefined> {
    const foundItem = await this.sessionNoteModel.findById(id);
    return foundItem;
  }

  public async isDataExist(id: string): Promise<boolean> {
    // 確認資料是否存在 使用 != 比對 null 跟 undefined
    return (await this.sessionNoteModel.exists({ _id: id })) != null;
  }

  private async isBodyPartExist(partId: string) {
    const result = await this.bodyPartService.findOneById(partId);
    console.log(result);

    return result !== undefined;
  }

  // private async isExerciseExist(exerciseId: string) {
  //   return (await this.exerciseService.findOneById(exerciseId)) !== undefined;
  // }
}
