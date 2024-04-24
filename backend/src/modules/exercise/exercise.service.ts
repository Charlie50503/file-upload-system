import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import { Exercise, ExerciseDocument } from 'src/schemas/exercise.schema';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectModel(Exercise.name, 'workOut')
    private exerciseModel: Model<ExerciseDocument>,
  ) {}

  public async getAll(): Promise<ExerciseDocument[]> {
    const Exercises = await this.exerciseModel.find();
    return Exercises;
  }

  public async create(
    createUserDto: CreateExerciseDto,
  ): Promise<ExerciseDocument> {
    const createdExercise = new this.exerciseModel(createUserDto);
    const Exercise = (await createdExercise.save()).toObject();
    return this.findOneById(Exercise._id.toString());
  }

  public async updateOne(id: string, data: UpdateExerciseDto) {
    const updated = await this.exerciseModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          exercise_chinese_name: data.exercise_chinese_name,
          exercise_english_name: data.exercise_english_name,
          description: data.description,
          muscle_tags: data.muscle_tags,
        },
      },
      { returnOriginal: false },
    );
    return updated;
  }

  public async deleteOneById(id: string): Promise<DeleteResult> {
    const result = await this.exerciseModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
    return result;
  }

  public async findOneById(id: string): Promise<ExerciseDocument | undefined> {
    const Exercise = await this.exerciseModel.findById(id);
    return Exercise;
  }
}
