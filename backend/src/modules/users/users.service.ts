import { Injectable } from '@nestjs/common';
import { InjectModel, getConnectionToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name, 'fileManagement')
    private userModel: Model<UserDocument>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto);
    const user = (await createdUser.save()).toObject();
    return this.findOneById(user._id.toString());
  }

  public async findOneByEmail(
    email: string,
  ): Promise<UserDocument | undefined> {
    const user = await this.userModel.findOne({ email }).select('-password');
    return user;
  }

  public async findOneById(id: string): Promise<UserDocument | undefined> {
    const user = await this.userModel.findById(id).select('-password');
    return user;
  }

  public async findOneByEmailIncludePassword(
    email: string,
  ): Promise<UserDocument | undefined> {
    const user = await this.userModel.findOne({ email });
    return user;
  }
}
