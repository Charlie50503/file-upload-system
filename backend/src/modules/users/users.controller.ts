import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { ResponseDto } from 'src/common/dto/response.dto';
import { UserDocument } from 'src/schemas/user.schema';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/common/decorator/public.decorator';
import { HttpResponse } from 'src/common/classes/response';
import { CustomExceptionFilter } from 'src/common/filters/custom-exception.filter';

@ApiTags('Users')
@Controller('users')
@UseFilters(new CustomExceptionFilter()) // 將過濾器應用到控制器
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('findById/:id')
  @ApiBearerAuth('JWT-auth')
  async findOneById(
    @Param('id') id: string,
  ): Promise<ResponseDto<UserDocument>> {
    const user = await this.usersService.findOneById(id);
    return new HttpResponse(200, 'success', user);
  }

  @Post()
  @Public() // 不使用 auth 驗證
  async create(
    @Body() createUser: CreateUserDto,
  ): Promise<ResponseDto<UserDocument>> {
    const createdUser = await this.usersService.create(createUser);
    return new HttpResponse(200, 'success', createdUser);
  }
}
