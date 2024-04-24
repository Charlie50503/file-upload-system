import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IsObjectIdPipe } from 'nestjs-object-id';
import { HttpResponse } from 'src/common/classes/response';
import { Public } from 'src/common/decorator/public.decorator';
import { MongoExceptionFilter } from 'src/common/filters/mongo-exception.filter';
import { CreateMuscleTagDto } from './dto/create-muscle-tag.dto';
import { UpdateMuscleTagDto } from './dto/update-muscle-tag.dto';
import { MuscleTagService } from './muscle-tag.service';

@ApiTags('WorkOut')
@Controller('work-out')
@Public()
@UseFilters(new MongoExceptionFilter()) // 將過濾器應用到控制器
export class MuscleTagController {
  constructor(private readonly muscleTagService: MuscleTagService) {}

  @Get('muscle-tag')
  @ApiOperation({
    summary: '取得所有標籤資料',
    description: '取得所有標籤',
  })
  async findAll() {
    const result = await this.muscleTagService.getAll();
    return new HttpResponse(200, 'success', result);
  }

  @Post('muscle-tag')
  @ApiOperation({
    summary: '新增一筆標籤資料',
    description: '新增一筆標籤資料',
  })
  async create(@Body() body: CreateMuscleTagDto) {
    const result = await this.muscleTagService.create(body);
    return new HttpResponse(200, 'success', result);
  }

  @Patch('muscle-tag/:id')
  @ApiOperation({
    summary: '更新一筆標籤資料',
    description: '更新一筆標籤資料',
  })
  async updateOne(
    @Param('id', IsObjectIdPipe) id: string,
    @Body() body: UpdateMuscleTagDto,
  ) {
    const result = await this.muscleTagService.updateOne(id, body);
    return new HttpResponse(200, 'success', result);
  }

  @Delete('muscle-tag/:id')
  @ApiOperation({
    summary: '刪除一筆標籤資料',
    description: '刪除一筆標籤資料',
  })
  async deleteOne(@Param('id', IsObjectIdPipe) id: string) {
    const result = await this.muscleTagService.deleteOneById(id);
    return new HttpResponse(200, 'success', result);
  }
}
