import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import { MuscleTag, MuscleTagDocument } from 'src/schemas/muscle-tag.schema';
import { CreateMuscleTagDto } from './dto/create-muscle-tag.dto';
import { UpdateMuscleTagDto } from './dto/update-muscle-tag.dto';

@Injectable()
export class MuscleTagService {
  constructor(
    @InjectModel(MuscleTag.name, 'workOut')
    private muscleTagModel: Model<MuscleTagDocument>,
  ) {}

  public async getAll(): Promise<MuscleTagDocument[]> {
    const foundItems = await this.muscleTagModel.find();
    return foundItems;
  }

  public async create(
    createUserDto: CreateMuscleTagDto,
  ): Promise<MuscleTagDocument> {
    const createdBodyPart = new this.muscleTagModel(createUserDto);
    const createdItem = (await createdBodyPart.save()).toObject();
    return this.findOneById(createdItem._id.toString());
  }

  public async updateOne(id: string, data: UpdateMuscleTagDto) {
    const updated = await this.muscleTagModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          tag_name: data.tag_name,
        },
      },
      { returnOriginal: false },
    );
    return updated;
  }

  public async deleteOneById(id: string): Promise<DeleteResult> {
    const result = await this.muscleTagModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
    return result;
  }

  public async findOneById(id: string): Promise<MuscleTagDocument | undefined> {
    const foundItem = await this.muscleTagModel.findById(id);
    return foundItem;
  }

  public async isDataExist(id: string): Promise<boolean> {
    // 確認資料是否存在 使用 != 比對 null 跟 undefined
    return (await this.muscleTagModel.exists({ _id: id })) != null;
  }
}
