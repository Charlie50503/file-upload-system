import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BodyPart, BodyPartDocument } from 'src/schemas/body-part.schema';
import { CreateBodyPartDto } from './dto/create-body-part.dto';
import { UpdateBodyPartDto } from './dto/update-body-part.dto';
import { DeleteResult } from 'mongodb';
@Injectable()
export class BodyPartService {
  constructor(
    @InjectModel(BodyPart.name, 'workOut')
    private bodyPartModel: Model<BodyPartDocument>,
  ) {}

  public async getAll(): Promise<BodyPartDocument[]> {
    const foundItems = await this.bodyPartModel.find();
    return foundItems;
  }

  public async create(
    createUserDto: CreateBodyPartDto,
  ): Promise<BodyPartDocument> {
    const createdBodyPart = new this.bodyPartModel(createUserDto);
    const createdItem = (await createdBodyPart.save()).toObject();
    return this.findOneById(createdItem._id.toString());
  }

  public async updateOne(id: string, data: UpdateBodyPartDto) {
    const updated = await this.bodyPartModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          part_english_name: data.part_english_name,
          part_chinese_name: data.part_chinese_name,
        },
      },
      { returnOriginal: false },
    );
    return updated;
  }

  public async deleteOneById(id: string): Promise<DeleteResult> {
    const result = await this.bodyPartModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
    return result;
  }

  public async findOneById(id: string): Promise<BodyPartDocument | undefined> {
    const foundItem = await this.bodyPartModel.findById(id);
    return foundItem;
  }
}
