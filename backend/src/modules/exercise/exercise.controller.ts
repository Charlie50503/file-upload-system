import { ExerciseService } from './exercise.service';
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
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@ApiTags('WorkOut')
@Controller('work-out')
@Public()
@UseFilters(new MongoExceptionFilter()) // 將過濾器應用到控制器
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get('exercises')
  @ApiOperation({
    summary: '取得所有訓練項目資料',
    description: '取得所有訓練項目',
  })
  async findAll() {
    const bodyParts = await this.exerciseService.getAll();
    return new HttpResponse(200, 'success', bodyParts);
  }

  @Post('exercise')
  @ApiOperation({
    summary: '新增一筆訓練項目資料',
    description: '新增一筆訓練項目資料',
  })
  async create(@Body() body: CreateExerciseDto) {
    const result = await this.exerciseService.create(body);
    return new HttpResponse(200, 'success', result);
  }

  @Patch('exercise/:id')
  @ApiOperation({
    summary: '更新一筆訓練項目資料',
    description: '更新一筆訓練項目資料',
  })
  async updateOne(
    @Param('id', IsObjectIdPipe) id: string,
    @Body() body: UpdateExerciseDto,
  ) {
    const result = await this.exerciseService.updateOne(id, body);
    return new HttpResponse(200, 'success', result);
  }

  @Delete('exercise/:id')
  @ApiOperation({
    summary: '刪除一筆訓練項目資料',
    description: '刪除一筆訓練項目資料',
  })
  async deleteOne(@Param('id', IsObjectIdPipe) id: string) {
    const result = await this.exerciseService.deleteOneById(id);
    return new HttpResponse(200, 'success', result);
  }
}
